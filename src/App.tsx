import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  MenuItem,
  CircularProgress,
  Box,
} from "@mui/material";
import { useQuery } from "react-query";

interface Tag {
  name: string;
  count: number;
}

const TagList = () => {
  const fetchTags = async () => {
    const response = await fetch(
      `https://api.stackexchange.com/2.3/tags?order=desc&site=stackoverflow`
    );
    const data = await response.json();
    return data.items.map((item: any) => ({
      name: item.name,
      count: item.count,
    }));
  };

  const [limit, setLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("name");
  const {
    data: allTagsData,
    isLoading: allTagsLoading,
    isError: allTagsError,
  } = useQuery<Tag[], Error>("allTags", fetchTags);

  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);

  useEffect(() => {
    if (!allTagsData) return;
    let sortedTags = [...allTagsData];
    if (sortBy === "name") {
      sortedTags = sortedTags.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "count") {
      sortedTags = sortedTags.sort((a, b) => b.count - a.count);
    }
    setFilteredTags(sortedTags.slice(0, limit));
  }, [allTagsData, limit, sortBy]);

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const intValue = parseInt(inputValue);

    if (inputValue === "" || inputValue === null) {
      setLimit(1);
      return;
    }

    if (intValue < 0) {
      return;
    }

    setLimit(intValue);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(event.target.value);
  };

  const selectOptions = [
    {
      value: "name",
      label: "Name",
    },
    {
      value: "count",
      label: "Count",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        p: 4,
      }}
    >
      {/* Refactor to list editor component */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: "16px",
          my: "2",
        }}
      >
        <TextField
          id="tag-limit"
          label="Number of tags"
          type="number"
          value={limit}
          onChange={handleLimitChange}
          variant="outlined"
          InputProps={{ inputProps: { min: 0 } }}
          error={limit <= 0}
          helperText={limit <= 0 ? "Please enter a positive integer" : ""}
          sx={{ mb: { xs: 2, sm: 0 }, width: { xs: "260px", sm: "190px" } }}
        />

        <TextField
          value={sortBy}
          id="sort-by"
          label="Sorted by"
          type="number"
          select
          onChange={handleSortChange}
          variant="outlined"
          sx={{ width: { xs: "260px", sm: "190px" } }}
        >
          {selectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box
        sx={{
          width: { xs: "260px", sm: "400px", md: "500px", lg: "800px" },
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        {/* Refactor to error component */}
        {allTagsError && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 2,
              borderRadius: 2,
            }}
          >
            <Typography color="error">Error fetching data</Typography>
          </Box>
        )}

        {/* Refactor to list component */}
        {!allTagsError && (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
                px: { xs: 2, sm: 5, md: 8 },
                backgroundColor: "#F6F6F6",
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
              }}
            >
              <Typography>Tags</Typography>
              <Typography>Tags count</Typography>
            </Box>

            {/* Refactor to list item component */}
            {filteredTags.map((tag) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                  px: { xs: 2, sm: 5, md: 8 },
                  borderBottom: "1px solid #F0F0F0",
                }}
              >
                <Typography>{tag.name}</Typography>
                <Typography>{tag.count}</Typography>
              </Box>
            ))}

            {allTagsLoading && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  py: 2,
                }}
              >
                <CircularProgress sx={{ py: 2, color: "black" }} size={24} />
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};

export default TagList;

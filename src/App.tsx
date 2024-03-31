import React, { useState, useEffect } from "react";
import {
  TextField,
  Typography,
  Grid,
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
    setLimit(parseInt(event.target.value));
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
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
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
          InputProps={{ inputProps: { min: 1 } }}
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
          borderRadius: 4,
        }}
      >
        {allTagsError && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              py: 2,
              borderRadius: 4,
              minWidth: { xs: 260, sm: 400, md: 500, lg: 800 },
            }}
          >
            <Typography color="error">Error fetching data</Typography>
          </Box>
        )}

        {!allTagsError && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: { xs: 260, sm: 400, md: 500, lg: 800 },
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    borderBottom: "1px solid #F0F0F0",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                  }}
                >
                  <Typography>Tags</Typography>
                  <Typography>Tags Count</Typography>
                </Box>
              </Grid>
              {filteredTags.map((tag) => (
                <Grid item xs={12} key={tag.name}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography>{tag.name}</Typography>
                    <Typography>{tag.count}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            {allTagsLoading && (
              <CircularProgress sx={{ py: 2, color: "black" }} size={24} />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TagList;

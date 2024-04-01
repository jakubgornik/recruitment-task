import { Box, TextField, MenuItem } from "@mui/material";

const ListEditor = ({
  options,
  setOptions,
  selectOptions,
}: {
  selectOptions: { value: string; label: string }[];
  setOptions: (options: { limit: number; sortBy: string }) => void;
  options: { limit: number; sortBy: string };
}) => {
  const { limit, sortBy } = options;

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const intValue = parseInt(inputValue);

    if (inputValue === "" || inputValue === null) {
      setOptions({ limit: 1, sortBy });
      return;
    }

    if (intValue < 0) {
      return;
    }

    setOptions({ limit: intValue, sortBy });
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({ limit, sortBy: event.target.value });
  };

  return (
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
  );
};

export default ListEditor;

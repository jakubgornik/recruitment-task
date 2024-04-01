import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 2,
      }}
    >
      <CircularProgress sx={{ py: 2, color: "black" }} size={24} />
    </Box>
  );
};

export default LoadingSpinner;

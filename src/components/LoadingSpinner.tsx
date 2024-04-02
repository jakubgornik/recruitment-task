import { Box, CircularProgress } from "@mui/material";
import { sxLoadingSpinner, sxLoadingSpinnerWrapper } from "../utils/sxProps";

const LoadingSpinner = () => {
  return (
    <Box sx={sxLoadingSpinnerWrapper}>
      <CircularProgress sx={sxLoadingSpinner} size={24} />
    </Box>
  );
};

export default LoadingSpinner;

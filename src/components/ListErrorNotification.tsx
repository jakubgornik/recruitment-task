import { Box, Typography } from "@mui/material";
import { sxListErrorNotification } from "../utils/sxProps";

const ListErrorNotification = () => {
  return (
    <Box sx={sxListErrorNotification}>
      <Typography color="error">Error fetching data</Typography>
    </Box>
  );
};

export default ListErrorNotification;

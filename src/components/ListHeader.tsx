import { Box, Typography } from "@mui/material";
import { sxListHeader } from "../utils/sxProps";

const ListHeader = () => {
  return (
    <Box sx={sxListHeader}>
      <Typography>Tags</Typography>
      <Typography>Tags count</Typography>
    </Box>
  );
};

export default ListHeader;

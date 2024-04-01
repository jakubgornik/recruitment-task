import { Box, Typography } from "@mui/material";

const ListHeader = () => {
  return (
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
  );
};

export default ListHeader;

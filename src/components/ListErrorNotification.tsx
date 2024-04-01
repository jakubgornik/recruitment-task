import { Box, Typography } from "@mui/material";

const ListErrorNotification = () => {
  return (
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
  );
};

export default ListErrorNotification;

import React from "react";
import { Box } from "@mui/material";

const ListCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: { xs: "260px", sm: "400px", md: "500px", lg: "800px" },
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default ListCard;

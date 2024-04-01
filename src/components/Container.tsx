import React from "react";
import { Box } from "@mui/material";

const Container = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </Box>
  );
};

export default Container;

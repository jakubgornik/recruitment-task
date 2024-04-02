import React from "react";
import { Box } from "@mui/material";
import { sxContainer } from "../utils/sxProps";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={sxContainer}>{children}</Box>;
};

export default Container;

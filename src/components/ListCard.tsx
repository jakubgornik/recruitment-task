import React from "react";
import { Box } from "@mui/material";
import { sxListCard } from "../utils/sxProps";

const ListCard = ({ children }: { children: React.ReactNode }) => {
  return <Box sx={sxListCard}>{children}</Box>;
};

export default ListCard;

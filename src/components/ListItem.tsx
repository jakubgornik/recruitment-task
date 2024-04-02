import { Box, Typography } from "@mui/material";
import { sxListItem } from "../utils/sxProps";

interface Tag {
  name: string;
  count: number;
}

const ListItem = ({ tag }: { tag: Tag }) => {
  return (
    <Box key={tag.name} sx={sxListItem}>
      <Typography>{tag.name}</Typography>
      <Typography>{tag.count}</Typography>
    </Box>
  );
};

export default ListItem;

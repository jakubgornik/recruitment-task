import { Box, Typography } from "@mui/material";

interface Tag {
  name: string;
  count: number;
}

const ListItem = ({ tag }: { tag: Tag }) => {
  return (
    <Box
      key={tag.name}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: { xs: 2, sm: 5, md: 8 },
        borderBottom: "1px solid #F0F0F0",
      }}
    >
      <Typography>{tag.name}</Typography>
      <Typography>{tag.count}</Typography>
    </Box>
  );
};

export default ListItem;

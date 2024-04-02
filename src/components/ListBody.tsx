import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import LoadingSpinner from "./LoadingSpinner";

interface Tag {
  name: string;
  count: number;
}

const ListBody = ({
  filteredTags,
  isLoading,
}: {
  filteredTags: Tag[];
  isLoading: boolean;
}) => {
  return (
    <>
      <ListHeader />

      {filteredTags.map((tag) => (
        <ListItem key={tag.name} tag={tag} />
      ))}

      {isLoading && <LoadingSpinner />}
    </>
  );
};

export default ListBody;

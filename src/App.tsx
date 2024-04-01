import { useState, useEffect } from "react";
import ListEditor from "./components/ListEditor";
import ListCard from "./components/ListCard";
import ListErrorNotification from "./components/ListErrorNotification";
import Container from "./components/Container";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
import LoadingSpinner from "./components/LoadingSpinner";
import { useQuery } from "react-query";

interface Tag {
  name: string;
  count: number;
}

const selectOptions = [
  {
    value: "name",
    label: "Name",
  },
  {
    value: "count",
    label: "Count",
  },
];

const TagList = () => {
  const [options, setOptions] = useState({ limit: 10, sortBy: "name" });
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);

  const fetchTags = async () => {
    const response = await fetch(
      `https://api.stackexchange.com/2.3/tags?order=desc&site=stackoverflow`
    );
    const data = await response.json();
    return data.items.map((item: any) => ({
      name: item.name,
      count: item.count,
    }));
  };

  const {
    data: allTagsData,
    isLoading: allTagsLoading,
    isError: allTagsError,
  } = useQuery<Tag[], Error>("allTags", fetchTags);

  useEffect(() => {
    if (!allTagsData) return;
    let sortedTags = [...allTagsData];
    if (options.sortBy === "name") {
      sortedTags = sortedTags.sort((a, b) => a.name.localeCompare(b.name));
    } else if (options.sortBy === "count") {
      sortedTags = sortedTags.sort((a, b) => b.count - a.count);
    }
    setFilteredTags(sortedTags.slice(0, options.limit));
  }, [allTagsData, options, options]);

  return (
    <Container>
      <ListEditor
        options={options}
        selectOptions={selectOptions}
        setOptions={setOptions}
      />
      <ListCard>
        {allTagsError && <ListErrorNotification />}

        {!allTagsError && (
          <>
            <ListHeader />

            {filteredTags.map((tag) => (
              <ListItem key={tag.name} tag={tag} />
            ))}

            {allTagsLoading && <LoadingSpinner />}
          </>
        )}
      </ListCard>
    </Container>
  );
};

export default TagList;

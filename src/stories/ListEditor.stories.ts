import type { Meta, StoryObj } from "@storybook/react";
import ListEditor from "../components/ListEditor";

/**
 * UI component for editing list.
 */
const meta = {
  title: "Components/ListEditor",
  component: ListEditor,
  tags: ["autodocs"],
} satisfies Meta<typeof ListEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    options: { limit: 10, sortBy: "name" },
    selectOptions: [
      {
        value: "name",
        label: "Name",
      },
      {
        value: "count",
        label: "Count",
      },
    ],
    setOptions: () => {},
  },
};

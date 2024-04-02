import type { Meta, StoryObj } from "@storybook/react";
import ListBody from "../components/ListBody";
/**
 * UI component which disply list of tags.
 */
const meta = {
  title: "Components/ListBody",
  component: ListBody,
  tags: ["autodocs"],
} satisfies Meta<typeof ListBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    filteredTags: [{ name: "Tag name", count: 1 }],
    isLoading: false,
  },
};

export const LoadingState: Story = {
  args: {
    filteredTags: [],
    isLoading: true,
  },
};

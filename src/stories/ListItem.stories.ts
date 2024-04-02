import type { Meta, StoryObj } from "@storybook/react";
import ListItem from "../components/ListItem";

const meta = {
  title: "Components/ListItem",
  component: ListItem,
  tags: ["autodocs"],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    tag: { name: "Tag name", count: 1 },
  },
};

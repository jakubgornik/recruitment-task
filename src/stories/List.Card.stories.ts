import type { Meta, StoryObj } from "@storybook/react";
import ListCard from "../components/ListCard";

/**
 * UI component for displaying list card.
 */
const meta = {
  title: "Components/ListCard",
  component: ListCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    children: "ListCard content",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Container from "../components/Container";
/**
 * UI component for containing other components.
 */
const meta = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    children: "Container content",
  },
};

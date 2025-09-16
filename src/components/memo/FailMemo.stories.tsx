import type { Meta, StoryObj } from "@storybook/react-vite";
import FailMemo from "./FailMemo";

const meta = {
  title: "Components/FailMemo",
  component: FailMemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number", min: 50, max: 300, step: 10 },
      description: "컴포넌트의 너비 (픽셀)",
    },
    height: {
      control: { type: "number", min: 50, max: 300, step: 10 },
      description: "컴포넌트의 높이 (픽셀)",
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스명",
    },
  },
  args: {},
} satisfies Meta<typeof FailMemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 130,
    height: 141,
  },
};

export const Small: Story = {
  args: {
    width: 80,
    height: 87,
  },
};

export const Large: Story = {
  args: {
    width: 200,
    height: 217,
  },
};

export const CustomSize: Story = {
  args: {
    width: 150,
    height: 160,
  },
};

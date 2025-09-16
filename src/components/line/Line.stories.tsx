import type { Meta, StoryObj } from "@storybook/react-vite";
import Line from "./Line";

const meta: Meta<typeof Line> = {
  title: "Components/Line",
  component: Line,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "라인의 너비",
    },
    height: {
      control: { type: "number" },
      description: "라인의 높이",
    },
    color: {
      control: { type: "color" },
      description: "라인의 색상",
    },
    strokeWidth: {
      control: { type: "number" },
      description: "라인의 두께",
    },
    className: {
      control: { type: "text" },
      description: "추가 CSS 클래스",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 254,
    height: 2,
    color: "#C99C7C",
    strokeWidth: 2,
  },
};

export const Short: Story = {
  args: {
    width: 100,
    height: 2,
    color: "#C99C7C",
    strokeWidth: 2,
  },
};

export const Thick: Story = {
  args: {
    width: 254,
    height: 2,
    color: "#C99C7C",
    strokeWidth: 4,
  },
};

export const Red: Story = {
  args: {
    width: 254,
    height: 2,
    color: "#FF0000",
    strokeWidth: 2,
  },
};

export const Blue: Story = {
  args: {
    width: 254,
    height: 2,
    color: "#0066CC",
    strokeWidth: 2,
  },
};

export const CustomSize: Story = {
  args: {
    width: 400,
    height: 3,
    color: "#8B4513",
    strokeWidth: 3,
  },
};

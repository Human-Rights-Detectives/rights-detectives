import type { Meta, StoryObj } from "@storybook/react-vite";
import MemoClear from "./MemoClear";

const meta: Meta<typeof MemoClear> = {
  title: "Components/MemoClear",
  component: MemoClear,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "메모의 너비",
    },
    height: {
      control: { type: "number" },
      description: "메모의 높이",
    },
    className: {
      control: { type: "text" },
      description: "추가 CSS 클래스",
    },
    image: {
      control: { type: "text" },
      description: "메모 내부에 표시할 이미지 URL",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 173,
    height: 169,
  },
};

export const Small: Story = {
  args: {
    width: 87,
    height: 85,
  },
};

export const Large: Story = {
  args: {
    width: 346,
    height: 338,
  },
};

export const CustomSize: Story = {
  args: {
    width: 250,
    height: 245,
  },
};

export const WithImage: Story = {
  args: {
    width: 173,
    height: 169,
    image: "https://via.placeholder.com/120x110/4ECDC4/FFFFFF?text=Clear",
  },
};

export const WithTargetImage: Story = {
  args: {
    width: 173,
    height: 169,
    image: "/images/target/1-1.jpg",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import Memo from "./Memo";

const meta: Meta<typeof Memo> = {
  title: "Components/Memo",
  component: Memo,
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
    width: 130,
    height: 141,
  },
};

export const Small: Story = {
  args: {
    width: 65,
    height: 70,
  },
};

export const Large: Story = {
  args: {
    width: 260,
    height: 282,
  },
};

export const CustomSize: Story = {
  args: {
    width: 200,
    height: 220,
  },
};

export const WithImage: Story = {
  args: {
    width: 130,
    height: 141,
    image: "https://via.placeholder.com/100x95/FF6B6B/FFFFFF?text=Image",
  },
};

export const WithTargetImage: Story = {
  args: {
    width: 130,
    height: 141,
    image: "/images/target/1-1.jpg",
  },
};

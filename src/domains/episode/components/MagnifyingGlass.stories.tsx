import type { Meta, StoryObj } from '@storybook/react-vite';
import MagnifyingGlass from './MagnifyingGlass';

const meta: Meta<typeof MagnifyingGlass> = {
  title: 'Episode/MagnifyingGlass',
  component: MagnifyingGlass,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 50, max: 300 },
      description: '돋보기의 너비',
    },
    height: {
      control: { type: 'number', min: 50, max: 400 },
      description: '돋보기의 높이',
    },
    className: {
      control: 'text',
      description: 'CSS 클래스명',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 돋보기
export const Default: Story = {
  args: {
    width: 98,
    height: 130,
  },
};

// 작은 크기
export const Small: Story = {
  args: {
    width: 50,
    height: 66,
  },
};

// 큰 크기
export const Large: Story = {
  args: {
    width: 200,
    height: 260,
  },
};

// 커스텀 크기
export const CustomSize: Story = {
  args: {
    width: 150,
    height: 195,
  },
  parameters: {
    docs: {
      description: {
        story: '크기를 자유롭게 조정할 수 있습니다.',
      },
    },
  },
};

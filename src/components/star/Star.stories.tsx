import type { Meta, StoryObj } from '@storybook/react';
import Star from './Star';

const meta: Meta<typeof Star> = {
  title: 'Components/Star',
  component: Star,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '추가 CSS 클래스명',
    },
    width: {
      control: { type: 'number', min: 1, max: 200 },
      description: '별 아이콘의 너비',
    },
    height: {
      control: { type: 'number', min: 1, max: 200 },
      description: '별 아이콘의 높이',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 47,
    height: 47,
  },
};

export const Small: Story = {
  args: {
    width: 24,
    height: 24,
  },
};

export const Large: Story = {
  args: {
    width: 80,
    height: 80,
  },
};

export const WithCustomClass: Story = {
  args: {
    width: 47,
    height: 47,
    className: 'opacity-50 hover:opacity-100 transition-opacity',
  },
};

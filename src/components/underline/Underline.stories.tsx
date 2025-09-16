import type { Meta, StoryObj } from '@storybook/react';
import Underline from './Underline';

const meta: Meta<typeof Underline> = {
  title: 'Components/Underline',
  component: Underline,
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
      control: { type: 'number', min: 1, max: 500 },
      description: '밑줄의 너비',
    },
    height: {
      control: { type: 'number', min: 1, max: 20 },
      description: '밑줄의 높이',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 220,
    height: 3,
  },
};

export const Short: Story = {
  args: {
    width: 100,
    height: 3,
  },
};

export const Long: Story = {
  args: {
    width: 400,
    height: 3,
  },
};

export const Thick: Story = {
  args: {
    width: 220,
    height: 6,
  },
};

export const WithCustomClass: Story = {
  args: {
    width: 220,
    height: 3,
    className: 'opacity-70 hover:opacity-100 transition-opacity',
  },
};

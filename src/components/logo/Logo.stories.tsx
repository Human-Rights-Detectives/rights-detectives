import type { Meta, StoryObj } from '@storybook/react-vite';
import Logo from './Logo';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: '로고의 너비',
    },
    height: {
      control: { type: 'number' },
      description: '로고의 높이',
    },
    className: {
      control: { type: 'text' },
      description: '추가 CSS 클래스명',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 213,
    height: 186,
  },
};

export const Small: Story = {
  args: {
    width: 100,
    height: 87,
  },
};

export const Large: Story = {
  args: {
    width: 320,
    height: 279,
  },
};

export const WithCustomClass: Story = {
  args: {
    width: 200,
    height: 175,
    className: 'custom-logo',
  },
};

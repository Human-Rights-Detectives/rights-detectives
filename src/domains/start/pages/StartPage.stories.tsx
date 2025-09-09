import type { Meta, StoryObj } from '@storybook/react-vite';
import StartPage from './StartPage';

const meta = {
  title: 'Pages/StartPage',
  component: StartPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StartPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

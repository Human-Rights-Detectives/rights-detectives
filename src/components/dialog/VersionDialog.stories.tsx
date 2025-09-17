import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import VersionDialog from './VersionDialog';

const meta = {
  title: 'Dialog/VersionDialog',
  component: VersionDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
  args: {
    isOpen: true,
    onClose: fn(),
  },
} satisfies Meta<typeof VersionDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: fn(),
  },
};

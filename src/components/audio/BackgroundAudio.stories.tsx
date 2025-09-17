import type { Meta, StoryObj } from '@storybook/react-vite';
import BackgroundAudio from './BackgroundAudio';

const meta = {
  title: 'Audio/BackgroundAudio',
  component: BackgroundAudio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    loop: { control: 'boolean' },
    volume: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    autoPlay: { control: 'boolean' },
  },
  args: {
    src: '/music/home-song.MP3',
    loop: true,
    volume: 0.3,
    autoPlay: false, // Storybook에서는 자동재생 비활성화
  },
} satisfies Meta<typeof BackgroundAudio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/music/home-song.MP3',
    loop: true,
    volume: 0.3,
    autoPlay: false,
  },
};

export const WithLoop: Story = {
  args: {
    src: '/music/home-song.MP3',
    loop: true,
    volume: 0.5,
    autoPlay: false,
  },
};

export const HighVolume: Story = {
  args: {
    src: '/music/home-song.MP3',
    loop: true,
    volume: 0.8,
    autoPlay: false,
  },
};

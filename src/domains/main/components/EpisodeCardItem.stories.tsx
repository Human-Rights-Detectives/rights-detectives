import type { Meta, StoryObj } from '@storybook/react-vite';
import EpisodeCardItem from './EpisodeCardItem';

const meta = {
  title: 'Domains/Main/Components/EpisodeCardItem',
  component: EpisodeCardItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    episodeNumber: {
      control: 'text',
      description: '에피소드 번호 (예: EPISODE 01)',
    },
    title: {
      control: 'text',
      description: '에피소드 제목',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} satisfies Meta<typeof EpisodeCardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    episodeNumber: 'EPISODE 01',
    title: '환자분! 이러지 마세요',
  },
};

export const Episode02: Story = {
  args: {
    episodeNumber: 'EPISODE 02',
    title: '다른 에피소드 제목',
  },
};

export const LongTitle: Story = {
  args: {
    episodeNumber: 'EPISODE 03',
    title: '매우 긴 에피소드 제목이 들어가는 경우의 테스트',
  },
};

export const CustomStyling: Story = {
  args: {
    episodeNumber: 'EPISODE 04',
    title: '커스텀 스타일링 테스트',
    className: 'shadow-lg',
  },
};

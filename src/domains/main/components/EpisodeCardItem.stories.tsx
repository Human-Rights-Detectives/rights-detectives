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
    width: {
      control: 'text',
      description: '너비 (Tailwind 클래스 또는 숫자)',
    },
    height: {
      control: 'text',
      description: '높이 (Tailwind 클래스 또는 숫자)',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
  args: {},
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

export const ResponsiveWidth: Story = {
  args: {
    episodeNumber: 'EPISODE 05',
    title: '반응형 너비 테스트',
    width: 'w-full max-w-96',
  },
};

export const CustomSize: Story = {
  args: {
    episodeNumber: 'EPISODE 06',
    title: '커스텀 크기 테스트',
    width: 400,
    height: 100,
  },
};

export const SmallSize: Story = {
  args: {
    episodeNumber: 'EPISODE 07',
    title: '작은 크기',
    width: 'w-64',
    height: 'h-16',
  },
};

export const PercentageSize: Story = {
  args: {
    episodeNumber: 'EPISODE 08',
    title: '퍼센트 크기 테스트',
    width: '80%',
    height: '15%',
  },
};

export const ViewportSize: Story = {
  args: {
    episodeNumber: 'EPISODE 09',
    title: '뷰포트 크기 테스트',
    width: '50vw',
    height: '10vh',
  },
};

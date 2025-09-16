import type { Meta, StoryObj } from '@storybook/react-vite';
import Document from './Document';

const meta: Meta<typeof Document> = {
  title: 'Episode/Document',
  component: Document,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colors: {
      control: 'object',
      description: '문서의 각 부분별 색상을 설정합니다',
      table: { category: 'Colors (Object)' },
    },
    borderColor: {
      control: 'color',
      description: '문서 외곽선 색상',
      table: { category: 'Colors (Individual)' },
    },
    innerColor: {
      control: 'color',
      description: '문서 내부 배경 색상',
      table: { category: 'Colors (Individual)' },
    },
    holesColor: {
      control: 'color',
      description: '구멍 부분 색상',
      table: { category: 'Colors (Individual)' },
    },
    linesColor: {
      control: 'color',
      description: '세로 줄 색상',
      table: { category: 'Colors (Individual)' },
    },
    surfaceColor: {
      control: 'color',
      description: '문서 표면 색상',
      table: { category: 'Colors (Individual)' },
    },
    backgroundColor: {
      control: 'color',
      description: '문서 내부 배경 색상',
      table: { category: 'Colors (Individual)' },
    },
    strokeColor: {
      control: 'color',
      description: '테두리 색상',
      table: { category: 'Colors (Individual)' },
    },
    width: {
      control: { type: 'number', min: 100, max: 800 },
      description: '문서의 너비',
      table: { category: 'Size' },
    },
    height: {
      control: { type: 'number', min: 100, max: 1200 },
      description: '문서의 높이',
      table: { category: 'Size' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 문서
export const Default: Story = {
  args: {
    colors: {
      border: '#BF5C1D',
      inner: '#F99D31',
      holes: '#765136',
      lines: '#FCBB76',
      surface: '#EDD39E',
      background: '#F9E6B5',
      stroke: '#422A18',
    },
    width: 345,
    height: 553,
  },
};

// 색상 플레이그라운드 - 실시간 색상 조정
export const ColorPlayground: Story = {
  args: {
    borderColor: '#BF5C1D',
    innerColor: '#F99D31',
    holesColor: '#765136',
    linesColor: '#FCBB76',
    surfaceColor: '#EDD39E',
    backgroundColor: '#F9E6B5',
    strokeColor: '#422A18',
    width: 345,
    height: 553,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 각 색상을 실시간으로 조정해보세요! 개별 색상 컨트롤을 사용하여 더 편리하게 색상을 변경할 수 있습니다.',
      },
    },
  },
};

// 원본 색상
export const Original: Story = {
  args: {
    colors: {
      border: '#BF5C1D',
      inner: '#F99D31',
      holes: '#765136',
      lines: '#FCBB76',
      surface: '#EDD39E',
      background: '#F9E6B5',
      stroke: '#422A18',
    },
  },
};

// 파란색 테마
export const BlueTheme: Story = {
  args: {
    colors: {
      border: '#1E3A8A',
      inner: '#3B82F6',
      holes: '#1E40AF',
      lines: '#93C5FD',
      surface: '#DBEAFE',
      background: '#F0F9FF',
      stroke: '#1E293B',
    },
  },
};

// 녹색 테마
export const GreenTheme: Story = {
  args: {
    colors: {
      border: '#166534',
      inner: '#22C55E',
      holes: '#15803D',
      lines: '#86EFAC',
      surface: '#DCFCE7',
      background: '#F0FDF4',
      stroke: '#14532D',
    },
  },
};

// 보라색 테마
export const PurpleTheme: Story = {
  args: {
    colors: {
      border: '#7C2D12',
      inner: '#A855F7',
      holes: '#6B21A8',
      lines: '#C084FC',
      surface: '#E9D5FF',
      background: '#FAF5FF',
      stroke: '#581C87',
    },
  },
};

// 회색 테마
export const GrayTheme: Story = {
  args: {
    colors: {
      border: '#374151',
      inner: '#6B7280',
      holes: '#4B5563',
      lines: '#D1D5DB',
      surface: '#F3F4F6',
      background: '#F9FAFB',
      stroke: '#111827',
    },
  },
};

// 핑크 테마
export const PinkTheme: Story = {
  args: {
    colors: {
      border: '#BE185D',
      inner: '#EC4899',
      holes: '#9D174D',
      lines: '#F9A8D4',
      surface: '#FCE7F3',
      background: '#FDF2F8',
      stroke: '#831843',
    },
  },
};

// 작은 크기
export const Small: Story = {
  args: {
    width: 200,
    height: 320,
  },
};

// 큰 크기
export const Large: Story = {
  args: {
    width: 500,
    height: 800,
  },
};

// 커스텀 색상 조합
export const CustomColors: Story = {
  args: {
    colors: {
      border: '#DC2626',
      inner: '#F59E0B',
      holes: '#B91C1C',
      lines: '#FDE68A',
      surface: '#FEF3C7',
      background: '#FFFBEB',
      stroke: '#7C2D12',
    },
  },
};

// 다크 모드 스타일
export const DarkMode: Story = {
  args: {
    colors: {
      border: '#1F2937',
      inner: '#374151',
      holes: '#111827',
      lines: '#6B7280',
      surface: '#4B5563',
      background: '#1F2937',
      stroke: '#000000',
    },
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

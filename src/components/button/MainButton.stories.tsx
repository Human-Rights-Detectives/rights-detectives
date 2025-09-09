import type { Meta, StoryObj } from '@storybook/react-vite';
import MainButton from './MainButton';

const meta = {
  title: 'Components/Button/MainButton',
  component: MainButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 실행될 함수',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
} satisfies Meta<typeof MainButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '시작하기',
  },
};

export const CustomText: Story = {
  args: {
    children: '다음 단계',
  },
};

export const Disabled: Story = {
  args: {
    children: '비활성화됨',
    disabled: true,
  },
};

export const LongText: Story = {
  args: {
    children: '매우 긴 텍스트 버튼',
  },
};

export const CustomStyling: Story = {
  args: {
    children: '커스텀 스타일',
    className: 'shadow-lg',
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import MissionIntroStep from "./MissionIntroStep";
import type { Mission } from "../../../../types";

const meta: Meta<typeof MissionIntroStep> = {
  title: "Episode/Steps/MissionIntroStep",
  component: MissionIntroStep,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onNext: { action: "next clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMission: Mission = {
  id: 1,
  missionNumber: 1,
  description: "병원 실습 중 사건 발생!\n정신과 병동 실습 중인 거위군.\n 퇴원을 앞둔 다람쥐 환자에게\n 인사를 건네다, 갑자기…!",
  completeDescription: "거위군을 때렸어요!\n폭행을 당한 거위군은… \n이어서 어떻게 할까요?",
};

export const Default: Story = {
  args: {
    mission: sampleMission,
    onNext: () => console.log("Next clicked"),
  },
};

export const Mission2: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 2,
      missionNumber: 2,
      description: "거위군은 대학교 현장실습 담당 교수님께\n실습중 겪은 폭행을 털어놓았어요.\n진지하게 듣던 교수님은\n거위군에게 이렇게 말했어요.",
      completeDescription: "학생 실습 중 폭행은 중대한 문제야!\n학교와 병원 사이의 협약에도 어긋나.\n이건 산재 신청도 가능해.\n거위군은 산재 신청을 하러…!",
    },
    onNext: () => console.log("Next clicked"),
  },
};

export const Mission3: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 3,
      missionNumber: 3,
      description: "거위군은 산재 신청을 위해\n근로복지공단으로 향했습니다.",
      completeDescription: "병원에서는 공식으로 사과하고,\n치료비와 심리상담\n비용을 지원했어요.\n거위군은 자신의\n권리를 지켜냈어요!",
    },
    onNext: () => console.log("Next clicked"),
  },
};

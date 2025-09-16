import type { Meta, StoryObj } from "@storybook/react";
import MissionCompleteStep from "./MissionCompleteStep";
import type { Mission } from "../../../../types";

const meta: Meta<typeof MissionCompleteStep> = {
  title: "Episode/Steps/MissionCompleteStep",
  component: MissionCompleteStep,
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
  description: "병원 실습 중 사건 발생!",
  completeDescription: "거위군을 때렸어요!\n폭행을 당한 거위군은… \n이어서 어떻게 할까요?",
};

export const Default: Story = {
  args: {
    mission: sampleMission,
    onNext: () => console.log("Next clicked"),
  },
};

export const LastMission: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 3,
      missionNumber: 3,
      description: "거위군은 산재 신청을 위해\n근로복지공단으로 향했습니다.",
      completeDescription: "병원에서는 공식으로 사과하고,\n치료비와 심리상담\n비용을 지원했어요.\n거위군은 자신의\n권리를 지켜냈어요!",
    },
    onNext: () => console.log("Episode complete clicked"),
    isLastMission: true,
  },
};

export const Mission2: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 2,
      missionNumber: 2,
      description: "거위군은 대학교 현장실습 담당 교수님께\n실습중 겪은 폭행을 털어놓았어요.",
      completeDescription: "학생 실습 중 폭행은 중대한 문제야!\n학교와 병원 사이의 협약에도 어긋나.\n이건 산재 신청도 가능해.",
    },
    onNext: () => console.log("Next clicked"),
    isLastMission: false,
  },
};

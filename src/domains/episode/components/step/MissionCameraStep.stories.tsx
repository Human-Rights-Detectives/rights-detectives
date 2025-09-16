import type { Meta, StoryObj } from "@storybook/react";
import MissionCameraStep from "./MissionCameraStep";
import type { Mission } from "../../../../types";

const meta: Meta<typeof MissionCameraStep> = {
  title: "Episode/Steps/MissionCameraStep",
  component: MissionCameraStep,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onComplete: { action: "complete clicked" },
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
    onComplete: () => console.log("Complete clicked"),
  },
};

export const Mission2: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 2,
      missionNumber: 2,
      description: "거위군은 대학교 현장실습 담당 교수님께\n실습중 겪은 폭행을 털어놓았어요.",
      completeDescription: "학생 실습 중 폭행은 중대한 문제야!",
    },
    onComplete: () => console.log("Complete clicked"),
  },
};

export const Mission3: Story = {
  args: {
    mission: {
      ...sampleMission,
      id: 3,
      missionNumber: 3,
      description: "거위군은 산재 신청을 위해\n근로복지공단으로 향했습니다.",
      completeDescription: "병원에서는 공식으로 사과하고,\n치료비와 심리상담 비용을 지원했어요.",
    },
    onComplete: () => console.log("Complete clicked"),
  },
};

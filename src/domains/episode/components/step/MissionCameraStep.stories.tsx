import type { Meta, StoryObj } from "@storybook/react-vite";
import MissionCameraStep from "./MissionCameraStep";  
import type { Episode, Mission } from "../../../../types";

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

const sampleEpisode: Episode = {
  id: 1,
  number: 1,
  title: "환자분 이러지 마세요",
  description: "거위군은 이번 달 부터\n정신과 병동에서 실습 중인\n대학생입니다.\n거위군은 퇴원을 앞둔\n다람쥐 환자를 만났어요.\n그런데 갑자기..!",
  missions: [sampleMission],
  color: {
    linesColor: "#F9E6B5",
    innerColor: "#8B4513",
    borderColor: "#D2691E",
  },
};

export const Default: Story = {
  args: {
    episode: sampleEpisode,
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

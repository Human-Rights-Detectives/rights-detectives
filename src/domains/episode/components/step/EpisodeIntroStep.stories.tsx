import type { Meta, StoryObj } from "@storybook/react";
import EpisodeIntroStep from "./EpisodeIntroStep";
import type { Episode, Mission } from "../../../../types";

const meta: Meta<typeof EpisodeIntroStep> = {
  title: "Episode/Steps/EpisodeIntroStep",
  component: EpisodeIntroStep,
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
  description: "병원 실습 중 사건 발생!\n정신과 병동 실습 중인 거위군.\n퇴원을 앞둔 다람쥐 환자에게\n인사를 건네다, 갑자기…!",
  completeDescription: "거위군을 때렸어요!\n폭행을 당한 거위군은…\n이어서 어떻게 할까요?",
};

const sampleEpisode: Episode = {
  id: 1,
  number: 1,
  title: "환자분 이러지 마세요",
  description: "거위군은 이번 달 부터\n정신과 병동에서 실습 중인\n대학생입니다.\n거위군은 퇴원을 앞둔\n다람쥐 환자를 만났어요.\n그런데 갑자기..!",
  missions: [sampleMission],
};

export const Default: Story = {
  args: {
    episode: sampleEpisode,
    mission: sampleMission,
    onNext: () => console.log("Next clicked"),
  },
};

export const LongDescription: Story = {
  args: {
    episode: {
      ...sampleEpisode,
      description: "이것은 매우 긴 설명입니다.\n여러 줄에 걸쳐서\n에피소드의 배경과\n상황을 설명하고 있습니다.\n사용자가 이해할 수 있도록\n충분한 정보를 제공합니다.\n\n추가적인 정보도 포함되어\n스토리북에서 테스트할 수 있습니다.",
    },
    mission: sampleMission,
    onNext: () => console.log("Next clicked"),
  },
};

export const LongTitle: Story = {
  args: {
    episode: {
      ...sampleEpisode,
      title: "매우 긴 제목이 있는\n에피소드입니다",
    },
    mission: sampleMission,
    onNext: () => console.log("Next clicked"),
  },
};

export const Mission2: Story = {
  args: {
    episode: sampleEpisode,
    mission: {
      ...sampleMission,
      missionNumber: 2,
      description: "두 번째 미션입니다.\n이미 첫 번째 미션을\n완료한 상태에서\n진행하는 미션입니다.",
      completeDescription: "두 번째 미션 완료!\n다음 단계로 진행합니다.",
    },
    onNext: () => console.log("Next clicked"),
  },
};

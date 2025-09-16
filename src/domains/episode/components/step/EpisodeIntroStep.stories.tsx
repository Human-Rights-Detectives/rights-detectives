import type { Meta, StoryObj } from "@storybook/react";
import EpisodeIntroStep from "./EpisodeIntroStep";
import type { Episode } from "../../../../types";

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

const sampleEpisode: Episode = {
  id: "ep01",
  number: 1,
  title: "환자분 이러지 마세요",
  description: "거위군은 이번 달 부터\n정신과 병동에서 실습 중인\n대학생입니다.\n거위군은 퇴원을 앞둔\n다람쥐 환자를 만났어요.\n그런데 갑자기..!",
  missions: [],
};

export const Default: Story = {
  args: {
    episode: sampleEpisode,
    onNext: () => console.log("Next clicked"),
  },
};

export const LongDescription: Story = {
  args: {
    episode: {
      ...sampleEpisode,
      description: "이것은 매우 긴 설명입니다.\n여러 줄에 걸쳐서\n에피소드의 배경과\n상황을 설명하고 있습니다.\n사용자가 이해할 수 있도록\n충분한 정보를 제공합니다.",
    },
    onNext: () => console.log("Next clicked"),
  },
};

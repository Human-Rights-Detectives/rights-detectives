export const EpisodeStep = {
  EPISODE_INTRO: "episode_intro",
  MISSION_1_INTRO: "mission_1_intro",
  MISSION_1_CAMERA: "mission_1_camera",
  MISSION_1_COMPLETE: "mission_1_complete",
  MISSION_2_INTRO: "mission_2_intro",
  MISSION_2_CAMERA: "mission_2_camera",
  MISSION_2_COMPLETE: "mission_2_complete",
  MISSION_3_INTRO: "mission_3_intro",
  MISSION_3_CAMERA: "mission_3_camera",
  MISSION_3_COMPLETE: "mission_3_complete",
} as const;

export type EpisodeStep = typeof EpisodeStep[keyof typeof EpisodeStep];

import React, { useState } from "react";
import episodesData from "../../../data/episode";
import type { Episode } from "../../../types";
import { useParams } from "react-router";
import { EpisodeStep } from "../types";
import EpisodeIntroStep from "../components/step/EpisodeIntroStep";
import MissionIntroStep from "../components/step/MissionIntroStep";
import MissionCameraStep from "../components/step/MissionCameraStep";
import MissionCompleteStep from "../components/step/MissionCompleteStep";

const EpisodePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // URL 파라미터로 받은 id로 에피소드 데이터 찾기
  const episode: Episode | undefined = episodesData.find(
    (ep) => ep.id.toString() === id
  );

  const [currentStep, setCurrentStep] = useState<EpisodeStep>(
    EpisodeStep.EPISODE_INTRO
  );
  const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

  // 에피소드가 없으면 에러 처리
  if (!episode) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-white text-xl">에피소드를 찾을 수 없습니다.</div>
      </main>
    );
  }

  const currentMission = episode.missions[currentMissionIndex];
  const isLastMission = currentMissionIndex === episode.missions.length - 1;

  // 단계별 핸들러 함수들
  const handleEpisodeIntroNext = () => {
    setCurrentStep(EpisodeStep.MISSION_1_INTRO);
  };

  const handleMissionIntroNext = () => {
    const missionNumber = currentMissionIndex + 1;
    if (missionNumber === 1) {
      setCurrentStep(EpisodeStep.MISSION_1_CAMERA);
    } else if (missionNumber === 2) {
      setCurrentStep(EpisodeStep.MISSION_2_CAMERA);
    } else if (missionNumber === 3) {
      setCurrentStep(EpisodeStep.MISSION_3_CAMERA);
    }
  };

  const handleMissionCameraComplete = () => {
    const missionNumber = currentMissionIndex + 1;
    if (missionNumber === 1) {
      setCurrentStep(EpisodeStep.MISSION_1_COMPLETE);
    } else if (missionNumber === 2) {
      setCurrentStep(EpisodeStep.MISSION_2_COMPLETE);
    } else if (missionNumber === 3) {
      setCurrentStep(EpisodeStep.MISSION_3_COMPLETE);
    }
  };

  const handleMissionCompleteNext = () => {
    if (isLastMission) {
      // 에피소드 완료 처리
      console.log("에피소드 완료!");
      // 여기에 에피소드 완료 후 처리 로직 추가
    } else {
      // 다음 미션으로 이동
      const nextMissionIndex = currentMissionIndex + 1;
      setCurrentMissionIndex(nextMissionIndex);
      
      if (nextMissionIndex === 1) {
        setCurrentStep(EpisodeStep.MISSION_2_INTRO);
      } else if (nextMissionIndex === 2) {
        setCurrentStep(EpisodeStep.MISSION_3_INTRO);
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center relative">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/board-game-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      {/* 검정색 오버레이 */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.6 }}></div>
      
      {/* 에피소드 소개 */}
      {currentStep === EpisodeStep.EPISODE_INTRO && (
        <EpisodeIntroStep 
          episode={episode} 
          onNext={handleEpisodeIntroNext} 
        />
      )}
      
      {/* 미션 소개 */}
      {(currentStep === EpisodeStep.MISSION_1_INTRO || 
        currentStep === EpisodeStep.MISSION_2_INTRO || 
        currentStep === EpisodeStep.MISSION_3_INTRO) && currentMission && (
        <MissionIntroStep 
          mission={currentMission} 
          onNext={handleMissionIntroNext} 
        />
      )}
      
      {/* 미션 카메라 */}
      {(currentStep === EpisodeStep.MISSION_1_CAMERA || 
        currentStep === EpisodeStep.MISSION_2_CAMERA || 
        currentStep === EpisodeStep.MISSION_3_CAMERA) && currentMission && (
        <MissionCameraStep 
          mission={currentMission} 
          onComplete={handleMissionCameraComplete} 
        />
      )}
      
      {/* 미션 완료 */}
      {(currentStep === EpisodeStep.MISSION_1_COMPLETE || 
        currentStep === EpisodeStep.MISSION_2_COMPLETE || 
        currentStep === EpisodeStep.MISSION_3_COMPLETE) && currentMission && (
        <MissionCompleteStep 
          mission={currentMission} 
          onNext={handleMissionCompleteNext}
          isLastMission={isLastMission}
        />
      )}

    </main>
  );
};

export default EpisodePage;

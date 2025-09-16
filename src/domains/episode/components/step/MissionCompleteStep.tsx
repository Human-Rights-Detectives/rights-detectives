import React from "react";
import type { Mission } from "../../../../types";

interface MissionCompleteStepProps {
  mission: Mission;
  onNext: () => void;
  isLastMission?: boolean;
}

const MissionCompleteStep: React.FC<MissionCompleteStepProps> = ({ 
  mission, 
  onNext, 
  isLastMission = false 
}) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-bold mb-6">
          미션 {mission.missionNumber} 완료!
        </h2>
        <div className="text-lg leading-relaxed mb-8 whitespace-pre-line">
          {mission.completeDescription}
        </div>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
        >
          {isLastMission ? "에피소드 완료" : "다음 미션"}
        </button>
      </div>
    </div>
  );
};

export default MissionCompleteStep;

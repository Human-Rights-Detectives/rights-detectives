import React from "react";
import type { Mission } from "../../../../types";

interface MissionIntroStepProps {
  mission: Mission;
  onNext: () => void;
}

const MissionIntroStep: React.FC<MissionIntroStepProps> = ({ mission, onNext }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          미션 {mission.missionNumber}
        </h2>
        <div className="text-lg leading-relaxed mb-8 whitespace-pre-line">
          {mission.description}
        </div>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
        >
          미션 시작
        </button>
      </div>
    </div>
  );
};

export default MissionIntroStep;

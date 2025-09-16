import React from "react";
import type { Mission } from "../../../../types";

interface MissionCameraStepProps {
  mission: Mission;
  onComplete: () => void;
}

const MissionCameraStep: React.FC<MissionCameraStepProps> = ({ mission, onComplete }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          미션 {mission.missionNumber} - 카메라 화면
        </h2>
        <div className="text-lg leading-relaxed mb-8">
          카메라를 사용해서 미션을 완료해보세요!
        </div>
        
        {/* 카메라 영역 (실제 구현 시 카메라 컴포넌트로 교체) */}
        <div className="w-full max-w-md h-64 bg-gray-800 rounded-lg mb-8 flex items-center justify-center border-2 border-dashed border-gray-400">
          <span className="text-gray-400">카메라 영역</span>
        </div>
        
        <button
          onClick={onComplete}
          className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
        >
          미션 완료
        </button>
      </div>
    </div>
  );
};

export default MissionCameraStep;

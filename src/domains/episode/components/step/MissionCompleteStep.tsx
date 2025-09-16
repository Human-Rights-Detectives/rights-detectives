import React from "react";
import type { Episode, Mission } from "../../../../types";
import Document from "../Document";
import MagnifyingGlass from "../MagnifyingGlass";
import MemoClear from "../../../../components/memo/MemoClear";
import MainButton from "../../../../components/button/MainButton";

interface MissionCompleteStepProps {
  episode: Episode;
  mission: Mission;
  onNext: () => void;
  isLastMission?: boolean;
}

const MissionCompleteStep: React.FC<MissionCompleteStepProps> = ({
  episode,
  mission,
  onNext,
  isLastMission = false,
}) => {
  return (
    <div className="relative w-[340px] h-[550px]">
      {/* 메인 Document */}
      <Document
        width={340}
        height={550}
        colors={{
          border: episode.color.borderColor,
          inner: episode.color.innerColor,
          holes: "#765136",
          lines: episode.color.linesColor,
          surface: "#EDD39E",
          background: "#F9E6B5",
          stroke: "#422A18",
        }}
      />

      {/* 돋보기 - 왼쪽 상단에 배치 */}
      <div className="absolute -top-4 left-0 z-10">
        <MagnifyingGlass width={94} height={126} />
      </div>

      {/* EPISODE 0X */}
      <div className="absolute top-4 left-[52%] -translate-x-1/2 z-10 text-[#F9E6B5] text-center text-[20px] font-regular font-jalnan">
        {`EPISODE ${episode.number.toString().padStart(2, "0")}`}
      </div>

      {/* 헤더더 컨텐츠 영역 */}
      <div className="absolute top-20 left-[52%] -translate-x-1/2 z-10">
        {/* MISSION 01 */}
        <div className="text-[#4B3118] text-center text-[16px] font-bold font-inter">
          {`MISSION ${mission.missionNumber.toString().padStart(2, "0")}`}
        </div>
        <MemoClear
          width={126}
          height={126}
          image={`/images/target/${episode.number}-${mission.missionNumber}.jpg`}
        />
      </div>

      {/* 메인 컨텐츠 영역 */}
      <div className="absolute top-66 left-[52%] -translate-x-1/2 w-[217px] h-[127px] z-10">
        {/* 설명 텍스트 */}
        <div className="text-[#4B3118] text-center text-[21px] font-regular font-omyu-pretty leading-[30px] mb-[12px] whitespace-pre-line">
          {mission.completeDescription}
        </div>
      </div>

      {/* 미션 시작 버튼 */}
      <div className="absolute bottom-7 left-[52%] -translate-x-1/2">
        <MainButton
          onClick={onNext}
          width={159}
          height={46}
          fontSize={22}
          textColor="#F9E6B5"
        >
          {isLastMission ? "사건 해결!" : "사건 조사하기기"}
        </MainButton>
      </div>
    </div>
  );
};

export default MissionCompleteStep;

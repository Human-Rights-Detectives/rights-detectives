import React from "react";
import type { Episode, Mission } from "../../../../types";
import Document from "../Document";
import MagnifyingGlass from "../MagnifyingGlass";
import Memo from "../../../../components/memo/Memo";
import Line from "../../../../components/line/Line";
import MainButton from "../../../../components/button/MainButton";
import Star from "../../../../components/star/Star";
import Underline from "../../../../components/underline/Underline";

interface MissionIntroStepProps {
  episode: Episode;
  mission: Mission;
  onNext: () => void;
}

const MissionIntroStep: React.FC<MissionIntroStepProps> = ({
  episode,
  mission,
  onNext,
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
      <div className="absolute top-20 left-14 w-[165px] z-10">
        {/* MISSION 01 */}
        <div className="text-[#4B3118] text-left text-[16px] font-bold font-inter mb-2">
          {`MISSION ${mission.missionNumber.toString().padStart(2, "0")}`}
        </div>
        {/* 제목 영역 */}
        <div className="mb-[19px] relative">
          <div className="absolute -top-4 left-22">
            <Star width={42} height={42} />
          </div>
          <h1 className="text-[#4B3118] text-left text-[28px] font-bold font-sebang-gothic leading-[1.2] whitespace-pre-line mb-1">
            {episode.title}
          </h1>
          <Underline width={163} height={2} />
        </div>
      </div>

      <div className="absolute top-18 -right-[9px] z-10">
        <Memo
          width={126}
          height={126}
          image={`/images/target/${episode.number}-${mission.missionNumber}.jpg`}
        />
      </div>
      {/* 메인 컨텐츠 영역 */}
      <div className="absolute top-52 left-[52%] -translate-x-1/2 w-[254px] h-[217px] z-10">
        {/* 설명 텍스트 */}
        <div className="text-[#4B3118] text-center text-[19px] font-regular font-omyu-pretty leading-[30px] mb-[12px] whitespace-pre-line">
          {mission.description}
        </div>

        {/* 두 번째 라인 */}
        <div className="mb-4 flex justify-center">
          <Line width={220} height={3} />
        </div>

        {/* 액션 텍스트 */}
        <div className="text-[#DA0000] text-center text-[20px] font-extrabold font-nanum-square leading-[1.4] mb-8 whitespace-pre-line">
          그림 속 장면을 보고,{"\n"}사건 현장을 찾아보세요!
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
          사건 조사하기
        </MainButton>
      </div>
    </div>
  );
};

export default MissionIntroStep;

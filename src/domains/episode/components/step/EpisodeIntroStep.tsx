import React from "react";
import type { Episode, Mission } from "../../../../types";
import Document from "../Document";
import MagnifyingGlass from "../MagnifyingGlass";
import Star from "../../../../components/star/Star";
import Underline from "../../../../components/underline/Underline";
import MainButton from "../../../../components/button/MainButton";

interface EpisodeIntroStepProps {
  episode: Episode;
  mission: Mission;
  onNext: () => void;
}

const EpisodeIntroStep: React.FC<EpisodeIntroStepProps> = ({
  episode,
  mission,
  onNext,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-[400px] h-[600px]">
        {/* 메인 Document */}
        <div className="absolute inset-0">
          <Document
            width={400}
            height={600}
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
        </div>

        {/* 돋보기 - 왼쪽 상단에 배치 */}
        <div className="absolute top-4 left-4 z-10">
          <MagnifyingGlass width={60} height={80} />
        </div>

        {/* EPISODE 0X*/}
        <div className="absolute top-12 right-8 z-10 text-[#F9E6B5] text-center text-[20px] font-regular font-jalnan">
          {`EPISODE ${episode.number.toString().padStart(2, "0")}`}
        </div>

        {/* 메인 컨텐츠 영역 */}
        <div className="absolute top-20 left-12 w-[280px] h-[400px] z-10">
          {/* MISSION 01 */}
          <div className="text-[#4B3118] text-left text-[18px] font-bold font-inter mb-4">
            {`MISSION ${mission.missionNumber.toString().padStart(2, "0")}`}
          </div>

          {/* 제목 영역 */}
          <div className="mb-6">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-[#4B3118] text-left text-[38px] font-bold font-sebang-gothic whitespace-pre-line flex-1">
                {episode.title}
              </h1>
              <div className="ml-4">
                <Star width={24} height={24} />
              </div>
            </div>
            <Underline width={200} height={3} />
          </div>

          {/* 설명 텍스트 */}
          <div className="text-[#4B3118] text-center text-[21px] font-regular font-omyu-pretty leading-relaxed mb-8 whitespace-pre-line">
            {episode.description}
          </div>

          {/* 시작하기 버튼 */}
          <div className="flex justify-center">
            <MainButton
              onClick={onNext}
              width={160}
              height={50}
              fontSize={23}
              textColor="#F9E6B5"
            >
              사건 조사하기
            </MainButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeIntroStep;

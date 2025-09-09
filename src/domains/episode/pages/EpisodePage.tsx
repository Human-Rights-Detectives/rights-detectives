import React from "react";
import episodesData from "../../../data/episode";
import type { Episode } from "../../../types";
import { useParams } from "react-router";

const EpisodePage: React.FC = () => {
  const { episodeId } = useParams<{ episodeId: string }>();

  // URL 파라미터로 받은 episodeId로 에피소드 데이터 찾기
  const episode: Episode | undefined = episodesData.find(
    (ep) => ep.id === episodeId
  );

  console.log(episode);

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
    </main>
  );
};

export default EpisodePage;

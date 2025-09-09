import React from "react";
import Logo from "../../../components/logo/Logo";
import EpisodeCardItem from "../components/EpisodeCardItem";
import episodesData from "../../../data/episode";
import { useNavigate } from "react-router";

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleEpisodeClick = (episodeId: string) => {
    navigate(`/episode/${episodeId}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-8 relative bg-[#FFD785]">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 opacity-29"
        style={{
          backgroundImage: "url('/images/board-game-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* 배경 오버레이 */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col gap-4 items-center w-full">
        {/* 로고 섹션 */}
        <Logo />

        {/* 에피소드 목록 */}
        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          {episodesData.map((episode) => (
            <EpisodeCardItem
              key={episode.id}
              episodeNumber={episode.number.toString()}
              title={episode.title}
              onClick={() => handleEpisodeClick(episode.id)}
              height={75}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainPage;

import React from "react";
import Logo from "../../../components/logo/Logo";
import EpisodeCardItem from "../components/EpisodeCardItem";
import episodesData from "../../../data/episode";

const MainPage: React.FC = () => {
  const handleEpisodeClick = (episodeId: string) => {
    console.log(`에피소드 선택: ${episodeId}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#ffd785] p-8">
      {/* 로고 섹션 */}
      <div className="mb-12">
        <Logo />
      </div>

      {/* 에피소드 목록 */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        {episodesData.map((episode) => (
          <EpisodeCardItem
            key={episode.id}
            episodeNumber={episode.title.split(" ")[0]} // "EP01" 부분만 추출
            title={episode.title.split(" ").slice(1).join(" ")} // "환자를 이력지 마세요" 부분
            onClick={() => handleEpisodeClick(episode.id)}
            height={78}
          />
        ))}
      </div>
    </main>
  );
};

export default MainPage;

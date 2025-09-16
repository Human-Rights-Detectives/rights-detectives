import React from "react";
import type { Episode } from "../../../../types";

interface EpisodeIntroStepProps {
  episode: Episode;
  onNext: () => void;
}

const EpisodeIntroStep: React.FC<EpisodeIntroStepProps> = ({ episode, onNext }) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">{episode.title}</h1>
        <div className="text-lg leading-relaxed mb-8 whitespace-pre-line">
          {episode.description}
        </div>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default EpisodeIntroStep;

interface EpisodeCardItemProps {
  episodeNumber: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

const EpisodeCardItem = ({ episodeNumber, title, className = "", onClick }: EpisodeCardItemProps) => {
  return (
    <div 
      className={`cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg w-80 h-20 bg-[#FFE9BC] rounded-[59px] flex flex-col justify-center px-6 py-3 ${className}`}
      onClick={onClick}
    >
      <div className="text-[#834C17] text-center text-xl font-bold font-['Jalnan'] mb-1">
        {episodeNumber}
      </div>
      <div className="text-[#834C17] text-center text-xl font-normal font-['SEBANG_Gothic'] truncate">
        {title}
      </div>
    </div>
  );
};

export default EpisodeCardItem;

interface EpisodeCardItemProps {
  episodeNumber: string;
  title: string;
  className?: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
}

const EpisodeCardItem = ({
  episodeNumber,
  title,
  className = "",
  onClick,
  width = "w-full max-w-80",
  height = "h-20",
}: EpisodeCardItemProps) => {
  const getWidthClass = (width: string | number) => {
    if (typeof width === "number") {
      return `w-[${width}px]`;
    }
    // 퍼센트 값이나 기타 CSS 값 처리
    if (
      width.includes("%") ||
      width.includes("vw") ||
      width.includes("vh") ||
      width.includes("rem") ||
      width.includes("em")
    ) {
      return `w-[${width}]`;
    }
    return width;
  };

  const widthClass = getWidthClass(width);

  // height는 인라인 스타일로 처리
  const heightStyle =
    typeof height === "number"
      ? { height: `${height}px` }
      : typeof height === "string"
      ? { height }
      : {};

  return (
    <div
      className={`cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg ${widthClass} bg-[#FFE9BC] rounded-[59px] flex flex-col justify-center px-6 py-4 min-h-[75px] ${className}`}
      style={heightStyle}
      onClick={onClick}
    >
      <div className="text-[#834C17] text-center text-xl font-bold font-['Jalnan'] mb-1">
        {episodeNumber}
      </div>
      <div className="text-[#834C17] text-center text-lg font-normal font-['SEBANG_Gothic'] leading-tight">
        {title}
      </div>
    </div>
  );
};

export default EpisodeCardItem;

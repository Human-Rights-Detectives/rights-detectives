import React from 'react';

interface LineProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Line: React.FC<LineProps> = ({
  width = 254,
  height = 2,
  color = "#C99C7C",
  strokeWidth = 2,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 254 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="1"
        x2="254"
        y2="1"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default Line;

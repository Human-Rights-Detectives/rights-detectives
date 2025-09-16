import React from 'react';

export interface StarProps {
  className?: string;
  width?: number;
  height?: number;
}

const Star: React.FC<StarProps> = ({
  className = '',
  width = 47,
  height = 47,
}) => {
  return (
    <img
      src="/images/star.svg"
      alt="별"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Star;

import React from 'react';

export interface MagnifyingGlassProps {
  className?: string;
  width?: number;
  height?: number;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({
  className = '',
  width = 98,
  height = 130,
}) => {
  return (
    <img
      src="/images/magnifying-glass.svg"
      alt="돋보기"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default MagnifyingGlass;

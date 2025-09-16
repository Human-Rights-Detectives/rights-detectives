import React from 'react';

export interface UnderlineProps {
  className?: string;
  width?: number;
  height?: number;
}

const Underline: React.FC<UnderlineProps> = ({
  className = '',
  width = 220,
  height = 3,
}) => {
  return (
    <img
      src="/images/underline.svg"
      alt="밑줄"
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Underline;

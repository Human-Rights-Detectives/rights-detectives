import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  width?: number;
  height?: number;
}

const MainButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '', 
  width = 192, 
  height = 64 
}: MainButtonProps) => {
  const buttonStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const backgroundStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer relative rounded-[32px] ${className}`}
      style={buttonStyle}
    >
      {/* 배경 레이어 1 (하단) */}
      <div 
        className="left-0 top-[9px] absolute bg-yellow-950 rounded-[32px] outline outline-[6px] outline-offset-[-3px] outline-yellow-950" 
        style={backgroundStyle}
      />
      
      {/* 배경 레이어 2 (상단) */}
      <div 
        className="left-0 top-0 absolute bg-yellow-900 rounded-[32px] outline outline-[6px] outline-offset-[-3px] outline-yellow-950" 
        style={backgroundStyle}
      />
      
      {/* 텍스트 - 중앙 정렬 */}
      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold font-['SEBANG_Gothic'] leading-none">
        {children}
      </div>
    </button>
  );
};

export default MainButton;

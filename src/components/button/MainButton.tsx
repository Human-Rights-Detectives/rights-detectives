import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  textColor?: string;
  loading?: boolean;
  loadingText?: string;
}

const MainButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '', 
  width = 192, 
  height = 64,
  fontSize = 36,
  textColor = 'white',
  loading = false,
  loadingText
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
      <div 
        className="absolute inset-0 flex items-center justify-center font-bold font-sebang-gothic leading-none"
        style={{ 
          fontSize: `${fontSize}px`,
          color: textColor
        }}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            {/* 로딩 스피너 */}
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
            <span>{loadingText || '처리 중...'}</span>
          </div>
        ) : (
          children
        )}
      </div>
    </button>
  );
};

export default MainButton;

import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const MainButton = ({ children, onClick, disabled = false, className = '' }: MainButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-48 h-16 relative rounded-[32px] ${className}`}
    >
      {/* 배경 레이어 1 (하단) */}
      <div className="w-48 h-14 left-0 top-[9px] absolute bg-yellow-950 rounded-[32px] outline outline-[6px] outline-offset-[-3px] outline-yellow-950" />
      
      {/* 배경 레이어 2 (상단) */}
      <div className="w-48 h-14 left-0 top-0 absolute bg-yellow-900 rounded-[32px] outline outline-[6px] outline-offset-[-3px] outline-yellow-950" />
      
      {/* 텍스트 */}
      <div className="left-[32px] top-[8px] absolute justify-start text-white text-4xl font-bold font-['SEBANG_Gothic']">
        {children}
      </div>
    </button>
  );
};

export default MainButton;

import React from 'react';
import logoUrl from '../../assets/images/logo.svg';

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  width = 213, 
  height = 186, 
  className = ''
}) => {
  return (
    <img
      src={logoUrl}
      alt="Logo"
      width={width}
      height={height}
      className={`logo ${className}`.trim()}
    />
  );
};

export default Logo;

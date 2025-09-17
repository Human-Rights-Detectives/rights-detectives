import React, { useState, useRef } from "react";
import Logo from "../../../components/logo/Logo";
import MainButton from "../../../components/button/MainButton";
import BackgroundAudio from "../../../components/audio/BackgroundAudio";
import VersionDialog from "../../../components/dialog/VersionDialog";
import { useNavigate } from "react-router";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [showVersionDialog, setShowVersionDialog] = useState(false);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartClick = () => {
    navigate("/main");
  };

  const handleLogoClick = () => {
    clickCountRef.current += 1;
    
    // 기존 타이머 클리어
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    
    // 5번 클릭했으면 다이얼로그 표시
    if (clickCountRef.current >= 5) {
      setShowVersionDialog(true);
      clickCountRef.current = 0;
      return;
    }
    
    // 2초 후 클릭 카운트 리셋
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 2000);
  };

  const handleCloseVersionDialog = () => {
    setShowVersionDialog(false);
  };

  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/start-bg.svg')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        backgroundSize: "auto"
      }}
    >
      {/* 백그라운드 음악 */}
      <BackgroundAudio 
        src="/music/home-song.MP3" 
        loop={true} 
        volume={0.3} 
        autoPlay={true} 
      />

      {/* 로고 섹션 */}
      <div className="mb-16 cursor-pointer" onClick={handleLogoClick}>
        <Logo width={320} height={279} />
      </div>

      <MainButton className="transform transition-transform hover:scale-105" onClick={handleStartClick} width={200} height={60}>
        시작하기
      </MainButton>

      {/* 버전 정보 다이얼로그 */}
      <VersionDialog 
        isOpen={showVersionDialog} 
        onClose={handleCloseVersionDialog} 
      />
    </main>
  );
};

export default StartPage;

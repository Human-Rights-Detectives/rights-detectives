import React from "react";
import Logo from "../../../components/logo/Logo";
import MainButton from "../../../components/button/MainButton";
import { useNavigate } from "react-router";

const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const handleStartClick = () => {
    navigate("/main");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* 로고 섹션 */}
      <div className="mb-16">
        <Logo width={320} height={279} />
      </div>

      <MainButton onClick={handleStartClick} width={200} height={60}>
        시작하기
      </MainButton>
    </main>
  );
};

export default StartPage;

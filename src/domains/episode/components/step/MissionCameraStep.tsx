import React, { useRef, useState, useEffect } from "react";
import type { Episode, Mission } from "../../../../types";
import { compareImages } from "../../../../utils/image-similarity";
import MainButton from "../../../../components/button/MainButton";
import Memo from "../../../../components/memo/Memo";

interface MissionCameraStepProps {
  episode: Episode;
  mission: Mission;
  onComplete: (isSuccess: boolean, similarity?: number) => void;
}

const MissionCameraStep: React.FC<MissionCameraStepProps> = ({ 
  episode, 
  mission, 
  onComplete 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const goalImageRef = useRef<HTMLImageElement>(null);
  const capturedImageRef = useRef<HTMLImageElement>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("사진 촬영하기");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [similarityScore, setSimilarityScore] = useState<number | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  // 목표 이미지 경로
  const goalImagePath = `/images/target/${episode.number}-${mission.missionNumber}.jpg`;

  // 카메라 스트림 시작
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment', // 후면 카메라 사용
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("카메라 접근 오류:", error);
      alert("카메라에 접근할 수 없습니다. 브라우저 권한을 확인해주세요.");
    }
  };

  // 카메라 스트림 중지
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // 사진 촬영
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        const imageDataUrl = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageDataUrl);
        setShowResult(true);
        stopCamera();
      }
    }
  };

  // 이미지 비교 실행
  const compareImagesHandler = async () => {
    if (!goalImageRef.current || !capturedImageRef.current) return;
    
    try {
      setIsLoading(true);
      setButtonText("이미지 비교 중...");
      
      const similarity = await compareImages(goalImageRef.current, capturedImageRef.current);
      if (!similarity) {
        throw new Error("이미지 비교 실패");
      }
      const similarityNumber = parseFloat(similarity);
      const success = similarityNumber >= 80; // 80% 이상이면 성공
      
      setSimilarityScore(similarityNumber);
      setIsSuccess(success);
      
      if (success) {
        // 성공 시 바로 완료 처리
        onComplete(true, similarityNumber);
      }
      // 실패 시에는 재촬영 유도 화면을 보여줌
      
    } catch (error) {
      console.error("이미지 비교 오류:", error);
      setIsSuccess(false);
      setSimilarityScore(0);
    } finally {
      setIsLoading(false);
    }
  };

  // 다시 촬영하기
  const retakePhoto = () => {
    setCapturedImage(null);
    setShowResult(false);
    setSimilarityScore(null);
    setIsSuccess(null);
    startCamera();
  };

  useEffect(() => {
    startCamera();
    
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="relative inset-0">
      {/* 목표 이미지 (숨김) */}
      <img
        ref={goalImageRef}
        src={goalImagePath}
        alt="목표 이미지"
        style={{ display: 'none' }}
        onLoad={() => console.log('목표 이미지 로드됨')}
      />
      
      {/* 촬영한 이미지 (숨김) */}
      {capturedImage && (
        <img
          ref={capturedImageRef}
          src={capturedImage}
          alt="촬영한 이미지"
          style={{ display: 'none' }}
          onLoad={() => console.log('촬영한 이미지 로드됨')}
        />
      )}

      {/* 캔버스 (숨김) */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {!showResult ? (
        // 카메라 화면
        <div className="relative w-full h-full bg-transparent rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          
          {/* Memo 컴포넌트와 안내 텍스트 오버레이 */}
          <div className="absolute top-12 left-[50%] -translate-x-1/2 flex flex-col items-center justify-center">
            {/* Memo 컴포넌트 */}
            <div className="mb-6">
              <Memo width={130} height={141} image={`/images/target/${episode.number}-${mission.missionNumber}.jpg`} />
            </div>
            
            {/* 안내 텍스트 */}
            <div className="text-center text-white">
              <p className="text-lg font-bold mb-1">
                그림 속 장면을 보고,
              </p>
              <p className="text-lg font-bold">
                사건 현장을 찾아보세요!
              </p>
            </div>
          </div>
          
          {/* 촬영 버튼 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <MainButton
              onClick={capturePhoto}
              width={200}
              height={50}
              fontSize={18}
              textColor="#FFFFFF"
            >
              {buttonText}
            </MainButton>
          </div>
        </div>
      ) : (
        // 결과 화면
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          {/* 목표 이미지 표시 */}
          <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white rounded-lg overflow-hidden">
            <img
              src={goalImagePath}
              alt="목표 이미지"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 촬영한 이미지 표시 */}
          <div className="absolute top-4 right-4 w-24 h-24 border-2 border-white rounded-lg overflow-hidden">
            <img
              src={capturedImage!}
              alt="촬영한 이미지"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* 유사도 결과 표시 */}
          {similarityScore !== null && (
            <div className="absolute top-32 left-4 right-4 text-center">
              <div className={`text-2xl font-bold mb-2 ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                {isSuccess ? '✅ 성공!' : '❌ 실패'}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                유사도: {similarityScore.toFixed(1)}%
              </div>
              {!isSuccess && (
                <div className="text-sm text-red-600 mb-2">
                  80% 이상이어야 성공입니다.
                </div>
              )}
            </div>
          )}
          
          {/* 안내 텍스트 */}
          <div className={`absolute ${similarityScore !== null ? 'top-48' : 'top-32'} left-4 right-4 text-center`}>
            <p className="text-lg font-bold text-gray-800 mb-2">
              등록한 이미지와
            </p>
            <p className="text-lg font-bold text-gray-800 mb-4">
              동일한 사진을 찍어주세요!
            </p>
            <p className="text-sm text-gray-600 mb-2">
              완벽하게 동일한 사진이 아니어도 괜찮아요!
            </p>
            <p className="text-xs text-gray-500">
              이미지 판정 AI가 유사한 이미지로 판정되면<br />
              (80% 이상) 해당 장소에 도착한 것으로 인정됩니다.
            </p>
          </div>
          
          {/* 버튼들 */}
          <div className="absolute bottom-8 left-4 right-4 flex gap-2">
            <MainButton
              onClick={retakePhoto}
              width={120}
              height={40}
              fontSize={14}
              textColor="#666666"
            >
              다시 촬영
            </MainButton>
            <MainButton
              onClick={compareImagesHandler}
              width={120}
              height={40}
              fontSize={14}
              textColor="#FFFFFF"
              disabled={isLoading}
            >
              {isLoading ? "비교 중..." : "확인하기"}
            </MainButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionCameraStep;

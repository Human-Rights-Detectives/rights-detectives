import React, { useRef, useState, useEffect } from "react";
import type { Episode, Mission } from "../../../../types";
import { compareImages } from "../../../../utils/image-similarity";
import MainButton from "../../../../components/button/MainButton";
import Memo from "../../../../components/memo/Memo";
import FailMemo from "../../../../components/memo/FailMemo";
import Document from "../Document";

// 간단한 상태 상수
const CameraState = {
  CAPTURING: "CAPTURING", // 촬영 중
  FAILURE: "FAILURE", // 실패
} as const;

type CameraState = (typeof CameraState)[keyof typeof CameraState];

interface MissionCameraStepProps {
  episode: Episode;
  mission: Mission;
  onComplete: (isSuccess: boolean, similarity?: number) => void;
}

const MissionCameraStep: React.FC<MissionCameraStepProps> = ({
  episode,
  mission,
  onComplete,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const goalImageRef = useRef<HTMLImageElement>(null);

  // 간단한 상태 관리
  const [cameraState, setCameraState] = useState<CameraState | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  // 목표 이미지 경로
  const goalImagePath = `/images/target/${episode.number}-${mission.missionNumber}.jpg`;

  // 카메라 스트림 시작
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // 후면 카메라 사용
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // 카메라 권한을 성공적으로 받았을 때 상태 업데이트
        setHasCameraPermission(true);
      }
    } catch (error) {
      console.error("카메라 접근 오류:", error);
      alert("카메라에 접근할 수 없습니다. 브라우저 권한을 확인해주세요.");
      setHasCameraPermission(false);
    }
  };

  // 카메라 스트림 중지
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  // 사진 촬영 및 즉시 유사도 검사
  const capturePhoto = async () => {
    if (videoRef.current && canvasRef.current) {
      setCameraState(CameraState.CAPTURING);

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);

        const imageDataUrl = canvas.toDataURL("image/jpeg");
        stopCamera();

        // 즉시 유사도 검사 실행
        await compareImagesHandler(imageDataUrl);
      }
    }
  };

  // 이미지 비교 실행
  const compareImagesHandler = async (imageDataUrl: string) => {
    if (!goalImageRef.current) return;

    try {
      // 촬영한 이미지를 Image 객체로 생성
      const capturedImg = new Image();
      capturedImg.src = imageDataUrl;

      await new Promise((resolve) => {
        capturedImg.onload = resolve;
      });

      const similarity = await compareImages(goalImageRef.current, capturedImg);
      if (!similarity) {
        throw new Error("이미지 비교 실패");
      }

      const similarityNumber = parseFloat(similarity);
      const success = similarityNumber >= 60; // 60% 이상이면 성공

      console.log("🔍 이미지 비교 결과:", {
        similarity: similarityNumber,
        success,
      });

      if (success) {
        // 성공 시 바로 완료 처리
        onComplete(true, similarityNumber);
      } else {
        setCameraState(CameraState.FAILURE);
      }
    } catch (error) {
      console.error("이미지 비교 오류:", error);
      setCameraState(CameraState.FAILURE);
    }
  };

  // 다시 촬영하기
  const retakePhoto = () => {
    setCameraState(null);
    startCamera();
  };

  useEffect(() => {
    startCamera();

    return () => {
      stopCamera();
    };
  }, []);

  // 디버깅용 상태 출력
  console.log("🎥 현재 카메라 상태:", cameraState);

  return (
    <div className="relative w-[340px] h-[550px]">
      {/* 목표 이미지 (숨김) */}
      <img
        ref={goalImageRef}
        src={goalImagePath}
        alt="목표 이미지"
        style={{ display: "none" }}
        onLoad={() => console.log("목표 이미지 로드됨")}
      />

      {/* 캔버스 (숨김) */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      {cameraState === CameraState.FAILURE ? (
        // 실패 결과 화면
        <>
          {/* 메인 Document */}
          <Document
            width={340}
            height={550}
            colors={{
              border: episode.color.borderColor,
              inner: episode.color.innerColor,
              holes: "#765136",
              lines: episode.color.linesColor,
              surface: "#EDD39E",
              background: "#F9E6B5",
              stroke: "#422A18",
            }}
          />

          <FailMemo
            className="absolute top-30 left-[61%] -translate-x-1/2"
            width={208}
            height={242}
          />

          {/* 설명 텍스트 */}
          <div className="absolute bottom-32 left-[52%] -translate-x-1/2 text-[#4B3118] text-center text-[21px] font-regular font-omyu-pretty leading-[30px] mb-8 whitespace-pre-line">
            <p>다시 한 번</p>
            <p>찾아볼까요?</p>
          </div>

          {/* 다시 조사 버튼 */}
          <div className="absolute bottom-7 left-[52%] -translate-x-1/2">
            <MainButton
              onClick={retakePhoto}
              width={159}
              height={46}
              fontSize={20}
              textColor="#F9E6B5"
            >
              다시 조사하기
            </MainButton>
          </div>
        </>
      ) : (
        // 촬영 중 화면 (기본 상태)
        <div className="relative w-full h-full bg-transparent rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />

          {!hasCameraPermission && (
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 flex flex-col items-center justify-center">
              <div className="text-center text-white font-nanum-square">
                <p className="text-lg font-bold">
                  사진 촬영을 위해 카메라 권한을 허용해주세요
                </p>
              </div>
            </div>
          )}

          {/* 카메라 권한을 받은 후에만 Memo 컴포넌트와 안내 텍스트 오버레이 렌더링 */}
          {hasCameraPermission && (
            <div className="absolute top-6 left-[50%] -translate-x-1/2 flex flex-col items-center justify-center">
              {/* Memo 컴포넌트 */}
              <div className="mb-4">
                <Memo
                  width={130}
                  height={141}
                  image={`/images/target/${episode.number}-${mission.missionNumber}.jpg`}
                />
              </div>

              {/* 안내 텍스트 */}
              <div className="text-center text-white font-nanum-square">
                <p className="text-lg font-bold">그림 속 장면을 보고,</p>
                <p className="text-lg font-bold">사건 현장을 찾아보세요!</p>
              </div>
            </div>
          )}

          {hasCameraPermission && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <MainButton
                onClick={capturePhoto}
                width={159}
                height={46}
                fontSize={20}
                textColor="#F9E6B5"
                disabled={cameraState === CameraState.CAPTURING}
              >
                사진 촬영하기
              </MainButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MissionCameraStep;

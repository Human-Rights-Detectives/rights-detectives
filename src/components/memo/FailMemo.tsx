import React from "react";

interface FailMemoProps {
  width?: number;
  height?: number;
  className?: string;
}

const FailMemo: React.FC<FailMemoProps> = ({
  width = 130,
  height = 141,
  className = "",
}) => {
  return (
    <img
      src="/images/fail-memo.svg"
      alt="실패한 메모"
      style={{
        width: width,
        height: height,
        objectFit: "contain",
      }}
      className={className}
    />
  );
};

export default FailMemo;

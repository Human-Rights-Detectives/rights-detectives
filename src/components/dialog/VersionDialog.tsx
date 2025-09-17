import React, { useEffect, useRef } from "react";

interface VersionDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const VersionDialog: React.FC<VersionDialogProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const version = "0.0.1";
  const buildDate = "2025-09-17";

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm bg-transparent p-0 rounded-lg shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onClose={onClose}
    >
      <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl">
        <div className="text-center">          
          <div className="space-y-3 text-left">            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold text-gray-700">버전:</span>
              <span className="text-gray-600">v{version}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-semibold text-gray-700">날짜:</span>
              <span className="text-gray-600 text-sm">{buildDate}</span>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default VersionDialog;

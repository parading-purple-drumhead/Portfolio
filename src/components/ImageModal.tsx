import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const ImageModal = ({ open, children, onClose }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div className="portal">
      <div
        className="overlay fixed bottom-0 left-0 right-0 top-0 z-10 bg-black"
        onClick={onClose}
      ></div>
      <div
        className={
          "modal fixed left-1/2 top-1/2 z-10 max-h-[90vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 touch-manipulation overflow-y-scroll rounded bg-white lg:w-2/3"
        }
      >
        <button
          className="fixed right-0 top-0 rounded-sm bg-black/30 px-3 py-2 text-2xl text-white"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default ImageModal;

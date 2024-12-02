import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ open, children, onClose }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div className="portal">
      <div
        className="overlay fixed bottom-0 left-0 right-0 top-0 z-10 bg-black/70"
        onClick={onClose}
      ></div>
      <div
        className={
          "modal fixed left-1/2 top-0 z-10 max-h-[95vh] w-[90%] -translate-x-1/2 overflow-y-scroll rounded bg-white sm:w-3/4 md:w-2/3 lg:w-2/5"
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

export default Modal;

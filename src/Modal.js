import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    rootModal.appendChild(elRef.current);
    return () => rootModal.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

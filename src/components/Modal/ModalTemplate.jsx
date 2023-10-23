import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export default function ModalTemplate({ onClose, children }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Dialog onClick={handleBackdropClick}>
      <DialogContent>{children}</DialogContent>
    </Dialog>,
    modalRoot
  );
}

import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { ModalContainer } from "./styled-components";

export interface ModalInterface {
  type: string;
  title: string;
  isOpen: boolean;
  children: ReactNode;
  handleCloseModal: () => void;
}

export const ModalBody: React.FC<ModalInterface> = ({
  type,
  title,
  isOpen,
  children,
  handleCloseModal,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer
          transition={{ ease: "easeInOut", times: { duration: 0.05 } }}
          exit={{
            opacity: 0,
            transition: { duration: 0.05, delay: 0.1, ease: "easeInOut" },
          }}
        >
          <motion.div
            transition={{ ease: "easeInOut", duration: 0.05, delay: 0.05 }}
            exit={{
              opacity: 0,
              scale: 0.6,
              transition: { duration: 0.1, ease: "easeInOut" },
            }}
          >
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between pb-3">
              <h3 className="fs-4 m-0 fw-semibold">{`${
                type === "UPDATE"
                  ? "Editar"
                  : type === "CREATE"
                  ? "Agregar"
                  : "Detalle"
              } ${title}`}</h3>
              <button
                type="button"
                className="fs-6 btn btn-primary py-1 px-2 rounded-circle"
                onClick={handleCloseModal}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            {children}
          </motion.div>
        </ModalContainer>
      )}
    </AnimatePresence>
  );
};

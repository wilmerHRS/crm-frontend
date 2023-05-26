import { motion } from "framer-motion";
import styled from "styled-components";

const ModalContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(50, 50, 50, 0.5);
  top: 0;
  position: fixed;

  & > div {
    background-color: white;
    padding: 15px 30px 30px 30px;
    min-width: 450px;
    max-height: 600px;
    border-radius: 10px;
  }
`;

export { ModalContainer };

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const ModalLayer = styled.div`
  position: relative;
  display: block;
  background-color: white;
  padding: 40px 40px;

  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.12), 1px 2px 2px rgba(0, 0, 0, 0.14),
    1px 4px 2px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
`;

export const Close = styled(AiOutlineClose)`
  cursor: pointer;
  position: absolute;
  color: rgba(18, 20, 23, 1);
  top: 7px;
  right: 7px;
`;

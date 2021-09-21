import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";
import closeIcon from "../images/close-icon.svg";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: #000000aa;
`;

export const ModalBox = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 580px;
  min-height: 300px;
  z-index: 1001;
  background-color: #ffffff;
`;

export const ModalHeader = ({ title }) => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <div className="flex">
      <h3>{title}</h3>
      <button
        className="auto__left"
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src={closeIcon} alt="close" />
      </button>
    </div>
  );
};

const Modal = (props) => {
  const { setShowModal } = useContext(ModalContext);

  return (
    <Overlay
      onClick={() => {
        setShowModal(false);
      }}
    >
      <ModalBox
        className="flex__column p-h-4 p-v-2"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </ModalBox>
    </Overlay>
  );
};

export default Modal;

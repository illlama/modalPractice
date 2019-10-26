import React, { useState } from "react";
import "./Modal.css";
import Draggable from "react-draggable";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

export const BoxModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const ModalMain = styled.div`
  padding-top: 20px;
  background-color: rgba(111, 153, 125, 0.199);
  width: 90px;
  height: 270px;
  border-radius: 3px;
`;

const Modal = ({ handleClose, children, show }: any) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const display = useSelector((state: RootState) => state.colorPickerHandle);

  const handleCloseOut = () => {
    if (
      display.SkyPickerState ||
      display.OceanPickerState ||
      display.SunPickerState
    ) {
      console.log(11111);
    } else {
      console.log(22222);
    }
  };
  return (
    <BoxModal className={showHideClassName} onClick={handleCloseOut}>
      <Draggable>
        <ModalMain>
          {children}
          <button onClick={handleClose}>close</button>
        </ModalMain>
      </Draggable>
    </BoxModal>
  );
};

export default Modal;

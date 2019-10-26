import React, { Component, useState, useCallback } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../modules/colorFix";
import {
  colorPickerOpen,
  colorPickerClose
} from "../modules/colorPickerHandle";
import { RootState } from "../modules";

export const Color = styled.button`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: ${props => props.color};
  border: 0px solid;
  cursor: pointer;
`;
export const Swatch = styled.div`
  margin-bottom: 20px;
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`;
export const Popover = styled.div`
  position: absolute;
  zindex: 2;
`;
export const Cover = styled.div`
  marign-left: 30px;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPickItem = (props: any) => {
  const display = useSelector((state: RootState) => state.colorPickerHandle);
  const dispatch = useDispatch();
  //여기서 선언된 함수를 다른 곳에서 사용하려면?
  const [decideColor, setDecideColor] = useState(false);
  async function handleClick() {
    dispatch(colorPickerOpen(props.name));
    switch (props.name) {
      case "colorSky":
        return setDecideColor(display.SkyPickerState);
      case "colorSun":
        return setDecideColor(display.SunPickerState);
      case "colorOcean":
        return setDecideColor(display.OceanPickerState);
    }
  }

  const handleClose = () => {
    dispatch(colorPickerClose());
    setDecideColor(false);
  };
  const handleChange = (color: any) => {
    const newColor = color.hex;
    switch (props.name) {
      case "colorSky":
        return dispatch(
          changeColor(newColor, props.color.colorSun, props.color.colorOcean)
        );
      case "colorSun":
        return dispatch(
          changeColor(props.color.colorSky, newColor, props.color.colorOcean)
        );
      case "colorOcean":
        return dispatch(
          changeColor(props.color.colorSky, props.color.colorSun, newColor)
        );

      default:
        return dispatch(
          changeColor(
            props.color.colorSky,
            props.color.colorSun,
            props.color.colorOcean
          )
        );
    }
  };
  return (
    <div>
      <Swatch onClick={handleClick}>
        <Color color={props.selected} />
      </Swatch>
      {decideColor ? (
        <Popover>
          <Cover onClick={handleClose} />
          <ChromePicker color={props.selected} onChange={handleChange} />
        </Popover>
      ) : null}
    </div>
  );
};

export default ColorPickItem;

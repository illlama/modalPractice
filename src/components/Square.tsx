import React, { Component, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { Popover, Cover } from "./ColorPickItem";
import { ChromePicker } from "react-color";
import { changeColor } from "../modules/colorFix";

interface squareType {
  height: string;
  width: string;
  inputColor: string;
  name: string;
  id: string;
}
export const BoxSquareShape = styled.div`
  display: flex;
  justify-content: center;
`;
export const SquareShape = styled.div`
  width: ${(props: squareType) => props.width};
  height: ${(props: squareType) => props.height};
  background-color: ${(props: squareType) => props.inputColor};
  border: 1px solid palevioletred;
  margin: 20px;
`;
export const Location = styled.div`
  position: relative;
  right: 15px;
  top: 40px;
`;

const Square = () => {
  const [display, setDisplay] = useState("");
  const dispatch = useDispatch();
  const { colorSky, colorSun, colorOcean } = useSelector(
    (state: RootState) => state.colorFix
  );

  const handleClick = (e: any) => {
    const divName = e.target.getAttribute("name");
    switch (divName) {
      case "colorSky":
        return setDisplay("colorSky");
      case "colorSun":
        return setDisplay("colorSun");
      case "colorOcean":
        return setDisplay("colorOcean");
      default:
        return setDisplay("");
    }
  };
  const handleClose = () => {
    setDisplay("");
  };
  const handleChangeSky = (color: any) => {
    const newColor = color.hex;
    dispatch(changeColor(newColor, colorSun, colorOcean));
  };
  const handleChangeSun = (color: any) => {
    const newColor = color.hex;
    dispatch(changeColor(colorSky, newColor, colorOcean));
  };
  const handleChangeOcean = (color: any) => {
    const newColor = color.hex;
    dispatch(changeColor(colorSky, colorSun, newColor));
  };
  ///함수를 재사용하는 방법 없을까?
  return (
    <BoxSquareShape>
      <SquareShape
        inputColor={colorSky}
        width="80px"
        height="80px"
        onClick={handleClick}
        name="colorSky"
        id="colorSky"
      />
      {display === "colorSky" ? (
        <Location>
          <Popover>
            <Cover onClick={handleClose} />
            <ChromePicker color={colorSky} onChange={handleChangeSky} />
          </Popover>
        </Location>
      ) : null}
      <SquareShape
        inputColor={colorSun}
        width="80px"
        height="80px"
        onClick={handleClick}
        name="colorSun"
        id="colorSun"
      />
      {display === "colorSun" ? (
        <Location>
          <Popover>
            <Cover onClick={handleClose} />
            <ChromePicker color={colorSun} onChange={handleChangeSun} />
          </Popover>
        </Location>
      ) : null}
      <SquareShape
        inputColor={colorOcean}
        width="80px"
        height="80px"
        onClick={handleClick}
        name="colorOcean"
        id="colorOcean"
      />
      {display === "colorOcean" ? (
        <Location>
          <Popover>
            <Cover onClick={handleClose} />
            <ChromePicker color={colorOcean} onChange={handleChangeOcean} />
          </Popover>
        </Location>
      ) : null}
    </BoxSquareShape>
  );
};

export default Square;

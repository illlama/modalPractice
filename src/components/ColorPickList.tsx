import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import ColorPickItem from "./ColorPickItem";
import styled from "styled-components";

// import useChangeColor from "../hooks/useChangeColor";
export const NameOfPicker = styled.p`
  margin: 3px;
`;
const ColorPickList = () => {
  const colors = useSelector((state: RootState) => state.colorFix);

  const { colorSky, colorSun, colorOcean } = colors;
  //   const onChangeColor = useChangeColor(colorSky, colorSun, colorOcean);

  return (
    <div>
      <NameOfPicker>First:</NameOfPicker>
      <ColorPickItem
        color={{ colorSky, colorSun, colorOcean }}
        selected={colorSky}
        name="colorSky"
      />
      <NameOfPicker>Second:</NameOfPicker>
      <ColorPickItem
        color={{ colorSky, colorSun, colorOcean }}
        selected={colorSun}
        name="colorSun"
      />
      <NameOfPicker>Third:</NameOfPicker>
      <ColorPickItem
        color={{ colorSky, colorSun, colorOcean }}
        selected={colorOcean}
        name="colorOcean"
      />
    </div>
  );
};

export default ColorPickList;

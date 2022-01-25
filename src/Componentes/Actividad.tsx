import React from "react";
import { Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  align-items: "flex-start";
  justify-content: "flex-start";
  width: 100%;
  margin: 10px 0px;
  column-gap: 10px;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const Info = styled.View`
  height: "50%";
  width: 80%;
  justify-content: space-evenly;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface Props {
  compartido: string;
  descripcion: string;
  foto: string;
}

export default function Actividad({ descripcion, compartido, foto }: Props) {
  return (
    <Container>
      <StyledImg
        width={54.93}
        height={54}
        source={{
          uri: foto,
        }}
      />
      <Info>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.mainColorBlack}
        >
          {descripcion}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={14}
          color={Colors.SecondaryGray}
        >
          {compartido}
        </StyledText>
      </Info>
    </Container>
  );
}

import React from "react";
import { Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosAgenda {
  titulo: string;
  hora: string;
  md: string;
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
  width: 100%;

  margin: 5px 0;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  text-align: left;
`;

const Info = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  width: 84%;
  height: 54px;
  padding: 9px 14px;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
`;
const Hora = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  width: 15%;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export default function Agenda(props: datosAgenda) {
  return (
    <Container>
      <Hora>
        <StyledText
          size={16}
          weight={700}
          fs={"normal"}
          lh={24}
          color={Colors.SecondaryGray}
        >
          {props.hora}
        </StyledText>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          {props.md}
        </StyledText>
      </Hora>
      <Info>
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.mainColorBlack}
        >
          {props.titulo}
        </StyledText>
      </Info>
    </Container>
  );
}

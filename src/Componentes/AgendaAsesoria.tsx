import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosAgenda {
  cliente: string;
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  column-gap: 1%;
  margin: 5px 0;
  padding: 15px;
  background-color: ${Colors.destacado};
  border-radius: 8px;
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
  row-gap: 5px;
`;
const IndicadorView = styled.View`
  background-color: ${Colors.ligthGray};
  border-radius: 4px;
  flex-direction: row;
  height: 52px;
  width: 110px;
  column-gap: 10px;
  padding: 5px;
`;

const LeftView = styled.View`
  width: 60%;
  justify-content: center;
  padding: 5px;
`;

export default function AgendaAsesoria(props: datosAgenda) {
  return (
    <Container>
      <Info>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.black}
        >
          {"Cliente: "}
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {props.cliente}
          </StyledText>
        </StyledText>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.black}
        >
          {"Categoria: "}
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {props.categoria}
          </StyledText>
        </StyledText>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.black}
        >
          {"Fecha de asesoría: "}
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {props.fecha}
          </StyledText>
        </StyledText>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.black}
        >
          {"Hora: "}
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {props.hora}
          </StyledText>
        </StyledText>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.black}
        >
          {"Tiempo: "}
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {props.tiempo}
          </StyledText>
        </StyledText>
      </Info>
      <IndicadorView>
        <LeftView>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={10}
            color={Colors.bordeDestacado}
          >
            Asesoría finalizada
          </StyledText>
        </LeftView>
        <StyledImg
          width={20}
          height={20}
          source={require("../../assets/images/BulletGray.png")}
        />
      </IndicadorView>
    </Container>
  );
}

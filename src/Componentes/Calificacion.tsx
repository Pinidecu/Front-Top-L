import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Linea } from "../Pantallas/StyledComponents/StyledComponents";

interface Props {
  titulo: string;
  comentario?: string;
  estrellas: number;
  linea?: boolean;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  margin: 5px 0px;
  width: 100%;
`;
const Container2 = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
const EstrellasView = styled.View`
  flex-direction: row;
  :5px ;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default function Calificacion({
  titulo,
  estrellas,
  comentario,
  linea,
}: Props) {
  return (
    <Container>
      <StyledText
        size={14}
        weight={400}
        fs={"normal"}
        lh={16.8}
        color={Colors.mainColorBlack}
      >
        {titulo}
      </StyledText>
      <Container2>
        <EstrellasView>
          {estrellas > 0 ? (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrellaLlena.png")}
            />
          ) : (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrella.png")}
            />
          )}
          {estrellas > 1 ? (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrellaLlena.png")}
            />
          ) : (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrella.png")}
            />
          )}
          {estrellas > 2 ? (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrellaLlena.png")}
            />
          ) : (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrella.png")}
            />
          )}
          {estrellas > 3 ? (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrellaLlena.png")}
            />
          ) : (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrella.png")}
            />
          )}
          {estrellas > 4 ? (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrellaLlena.png")}
            />
          ) : (
            <StyledImg
              width={20}
              height={20}
              source={require("../../assets/images/estrella.png")}
            />
          )}
        </EstrellasView>
        {comentario ? (
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {comentario}
          </StyledText>
        ) : null}
      </Container2>
      {linea ? <Linea /> : null}
    </Container>
  );
}

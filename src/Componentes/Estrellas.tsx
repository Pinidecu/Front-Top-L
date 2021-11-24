import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Linea } from "../Pantallas/StyledComponents/StyledComponents";

interface Props {
  estrellas: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const EstrellasView = styled.View`
  flex-direction: row;
  column-gap: 5px;
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

export default function Estrellas({ estrellas }: Props) {
  return (
    <EstrellasView>
      {estrellas >=1 ? (
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
      {estrellas >=2? (
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
      {estrellas >=3 ? (
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
      {estrellas >= 4 ? (
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
      {estrellas >= 5 ? (
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
  );
}

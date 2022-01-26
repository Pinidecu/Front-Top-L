import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  texto: string;
  icon1?: boolean;
  icon2?: boolean;
}

interface ContainerProps {
  color: string;
  width: number;
  height: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}
const Container = styled.View`
  width: 100%;
  align-items: center;
`
const Containertext = styled.View<ContainerProps>`
  flex-direction: row;
  background-color: ${(props) => props.color};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  align-self: center;
  margin: 2%;
`;

const Descripcion = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`

interface StyledImgProps {
  width: number;
  height: number;
}

const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Linea = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
  margin-top: 11px;
`;

export default function CajaArea({
  texto,
  icon1,
  icon2
}: Props) {
  return (
    <Container>
    <Containertext width={95} height={22} color={Colors.white}>
        <Descripcion
          weight={700}
          size={16}
          lh={24}
          color={Colors.SecondaryGray}
        >
          {texto}
        </Descripcion>
        {icon1 ? (
          <Icono
            width={16}
            height={16}
            source={require("../../assets/images/Bullet-selected.png")}
          />
        ) : null}
        {icon2 ? (
          <Icono
            width={16}
            height={16}
            source={require("../../assets/images/Bullet-select.png")}
          />
        ) : null}  
    </Containertext>
    <Linea />
    </Container>
  );
}

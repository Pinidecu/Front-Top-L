import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface datosPublicacion {
  fotoPerfil: string;
  nombre: string[];
  descripcion: string;
  imagen: string;
}
interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8;
  border: 1px solid ${Colors.bordeDestacado};
`;
const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px;
  width: 90%;
`;
const StyledImgIcono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Titulo = styled.View``;
const Monto = styled.View`
  flex-direction: row;

  align-items: center;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

const datos: datosPublicacion = {
  fotoPerfil: "https://lorempixel.com/200/200/people/",
  nombre: ["Armando Lopez", "@arlopez21", "2h"],
  descripcion: "Group name lorem ipsum dolor amet sim athem",
  imagen: "https://lorempixel.com/200/200/people/",
};

interface Props {
  titulo: string;
  tags: string;
  icono: string;
  valor: string;
  moneda: string;
}

export default function Servicio({
  titulo,
  tags,
  icono,
  valor,
  moneda,
}: Props) {
  return (
    <Container>
      <Info>
        <LeftView>
          <StyledImgIcono
            width={45}
            height={45}
            radio={"50%"}
            margin={"0"}
            source={require("../../assets/images/badge.png")}
          />
          <Titulo>
            <StyledText
              size={14}
              weight={700}
              fs={"normal"}
              lh={18}
              color={Colors.mainColorBlack}
            >
              {titulo}
            </StyledText>
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={14}
              color={Colors.SecondaryGray}
            >
              {tags}
            </StyledText>
          </Titulo>
        </LeftView>
        <Monto>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {valor}
          </StyledText>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {moneda}
          </StyledText>
        </Monto>
      </Info>
    </Container>
  );
}

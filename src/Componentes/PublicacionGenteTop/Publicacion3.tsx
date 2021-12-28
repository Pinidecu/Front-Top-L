import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

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
  background-color: ${Colors.white};
  border-radius: 8px;
  border: 1px solid ${Colors.bordeDestacado};
  box-shadow: 0px 0px 8px rgba(157, 164, 181, 0.2);
`;
const Info = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
  column-gap: 10px;
  width: 90%;
`;
const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const StyledImgIcons = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
const Titulo = styled.View`
  width: 80%;
  row-gap: 5px;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

const StyledBookmark = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: -5px;
  right: 10px;
`;

export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 10px;
  justify-content: space-between;
`;
export const DescripcionView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MegustaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 90%;
`;
const Funciones = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;
const MasView = styled.View`
  border-radius: 50%;
  background-color: ${Colors.SecondaryPurpleLight};
  opacity: 0.9;
  position: absolute;
  top: 38.5px;
  left: 15px;
  z-index: 1;
`;
interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function Publicacion3({
  fotoPerfil,
  nombre,
  descripcion,
  imagen,
}: Props) {
  return (
    <Container>
      <TituloView>
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.mainCOlorPurpleLigth}
        >
          luccamorino01
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            {" comentó en el evento que sigues."}
          </StyledText>
        </StyledText>
      </TituloView>
      <Info>
        <MasView>
          <Icon name="add" color={Colors.mainCOlorPurpleLigth} size={15} />
        </MasView>
        <StyledImgPerfil
          width={45}
          height={45}
          radio={"50%"}
          margin={"0"}
          source={{
            uri: fotoPerfil,
          }}
        />
        <Titulo>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </StyledText>
          <DescripcionView>
            <StyledText
              size={14}
              weight={400}
              fs={"normal"}
              lh={18}
              color={Colors.black}
            >
              {descripcion}
            </StyledText>
            <Icon
              name="more-horiz"
              color={Colors.mainCOlorPurpleLigth}
              size={25}
            />
          </DescripcionView>
          <StyledImg
            width={90}
            height={158.87}
            radio={""}
            margin={"0px"}
            source={{
              uri: imagen,
            }}
          />
          <MegustaView>
            <Funciones>
              <Icon
                name="favorite-border"
                color={Colors.SecondaryGray}
                size={18}
              />
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                (128)
              </StyledText>
            </Funciones>
            <Funciones>
              <StyledImgIcons
                width={10}
                height={10}
                radio={""}
                margin={"0px"}
                source={require("../../../assets/images/comentario.png")}
              />{" "}
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                Comentarios
              </StyledText>
            </Funciones>
            <Funciones>
              <StyledImgIcons
                width={10}
                height={10}
                radio={""}
                margin={"0px"}
                source={require("../../../assets/images/send.png")}
              />
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                Compartir
              </StyledText>
            </Funciones>
          </MegustaView>
        </Titulo>
      </Info>
    </Container>
  );
}

import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/Colors";
import BarraP3 from "../Componentes/BarraP3";
import Publicacion1 from "../Componentes/PublicacionGenteTop/Publicacion1";
import fotoPerfilPublicacion from "../../assets/images/Sala/11.png";
import fotoPerfilPublicacion2 from "../../assets/images/Sala/10.png";
import fotoPubliacacion from "../../assets/images/Publicacion.png";
import fotoPubliacacion2 from "../../assets/images/Sala/13.png";
import fotoPubliacacion3 from "../../assets/images/Sala/14.png";
import Publicacion2 from "../Componentes/PublicacionGenteTop/Publicacion2";
import Publicacion3 from "../Componentes/PublicacionGenteTop/Publicacion3";
import Publicacion4 from "../Componentes/PublicacionGenteTop/Publicacion4";

export const ScrollContainer = styled.ScrollView`
  background-color: ${Colors.SecondaryPurpleLight};
`;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  background-color: ${Colors.SecondaryPurpleLight};
`;
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  sub?: boolean;
}
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  ${({ sub }) =>
    sub &&
    `    
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
  `}
`;
interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const RecomendacionView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5%;
  margin: 2%;
  background-color: ${Colors.white};
  justify-content: space-between;
`;

export const DescripcionView = styled.View`
  align-items: center;
  width: 90%;
  row-gap: 10px;
  margin: 2%;
`;
export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const PublicacionView = styled.View`
  width: 90%;
  row-gap: 10px;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;
export default function GenteTop() {
  return (
    <ScrollContainer>
      <Container>
        <BarraP3 />
        <RecomendacionView>
          <StyledText
            size={20}
            weight={400}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Pidele una recomendación a tu Comunidad Top
          </StyledText>
          <StyledImg
            width={40}
            height={40}
            source={require("../../assets/images/LogoDato.png")}
          />
        </RecomendacionView>
        <DescripcionView>
          <TituloView>
            <StyledText
              size={16}
              weight={700}
              fs={"normal"}
              lh={24}
              color={Colors.black}
            >
              Publicaciones recientes
            </StyledText>
            <Icon
              name="more-horiz"
              color={Colors.mainCOlorPurpleLigth}
              size={25}
            />
          </TituloView>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.textoGris}
          >
            Aquí encontrarás toda la información y publicaciones sobre tu
            Comunidad Top. Pide o da recomendaciones!
          </StyledText>
        </DescripcionView>
        <PublicacionView>
          <Publicacion1
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"María Paula Cadena  •  @mapaucadena • 2h"}
            descripcion={
              "Necesito una recomendación top para un profesor de guitarra a domicilio en Bogotá, Colombia."
            }
            imagen={fotoPubliacacion}
          />
          <Publicacion2
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"Armando Lopez • @arlopez21 • Hace 2h"}
            descripcion={
              "Necesito una recomendación top para un profesor de guitarra a domicilio en Bogotá, Colombia."
            }
            imagen={fotoPubliacacion}
          />
          <Publicacion3
            fotoPerfil={fotoPerfilPublicacion2}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Lorem ipsum dolor amet sim athem"}
            imagen={fotoPubliacacion}
          />
          <Publicacion4
            fotoPerfil={fotoPerfilPublicacion2}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Lorem ipsum dolor amet sim athem"}
            imagen={fotoPubliacacion}
            fotoPerfil2={fotoPubliacacion2}
            fotoPerfil3={fotoPubliacacion3}
          />
        </PublicacionView>
      </Container>
    </ScrollContainer>
  );
}

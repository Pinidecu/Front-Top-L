import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "./BarraIconos";
import BarraLiveOpcion2 from "./BarraLiveOpcion2";
import imagenLive from "../../assets/images/live.png";
import imagenPerfil from "../../assets/images/Sala/8.png";

interface ContainerProps {
  foto: string;
}
const Container = styled.View<ContainerProps>`
  background-image: url(${(props) => props.foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

interface Props {
  foto: string;
}
export default function ImgLiveOpcion2({ foto }: Props) {
  return (
    <Container foto={foto}>
      <BarraLiveOpcion2
        fotoPerfil={imagenPerfil}
        nombre={"Ricarzo Zambrano Pión"}
        usuario={"@ricardocoach"}
        hora={"00:31:21"}
      />
    </Container>
  );
}

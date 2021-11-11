import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import imagenLive2 from "../../assets/images/live1.png";

interface ContainerProps {
  foto: string;
}

const Container = styled.View<ContainerProps>`
  background-image: url(${(props) => props.foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 28vw;
  height: 22vh;
  border-radius: 20px;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;;
`;

const StyledText = styled.Text`
  color: ${Colors.white};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 12;
  font-weight: 700;
  line-height: 14;
  margin: 5px;
`;

interface Props {
  nombre: string;
  foto: string;
}


export default function ImgLive2({ nombre,foto }: Props) {
  return <Container foto={foto}><StyledText>{nombre}</StyledText></Container>;
}


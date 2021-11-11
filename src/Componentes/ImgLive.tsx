import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "./BarraIconos";



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

export default function ImgLive({ foto }: Props) {
  return (
    <Container foto={foto}>
      <BarraIconos
        titulo={""}
        margin={"0px"}
        colorIcons={Colors.white}
        threePoints={false}
        add={true}
      />
    </Container>
  );
}


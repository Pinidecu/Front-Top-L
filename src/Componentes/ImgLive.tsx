import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "./BarraIconos";


let urlImg: string = "https://lorempixel.com/375/718/people/";

const Container = styled.View`
  background-image: url(${urlImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;


export default function ImgLive() {  
  return (
    <Container>
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


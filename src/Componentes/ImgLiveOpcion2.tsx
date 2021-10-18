import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "./BarraIconos";
import BarraLiveOpcion2 from "./BarraLiveOpcion2";


let urlImg: string = "https://lorempixel.com/375/718/people/";

const Container = styled.View`
  background-image: url(${urlImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;


export default function ImgLiveOpcion2() {  
  return (
    <Container>
      <BarraLiveOpcion2/>
    </Container>
  );
}


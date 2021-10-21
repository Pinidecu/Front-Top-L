import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";


let urlImg: string = "https://lorempixel.com/375/718/people";

const Container = styled.View`
  background-image: url(${urlImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 28vw;
  height: 22vh;
  border-radius: 20px;
  z-index: 1;
  justify-content: flex-end;
  align-items: center;
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
}


export default function ImgLive2({ nombre }: Props) {
  return <Container><StyledText>{nombre}</StyledText></Container>;
}


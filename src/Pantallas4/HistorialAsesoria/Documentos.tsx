import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";
import CajaDoc from "../../Componentes/CajaDoc";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
`;
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}
export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  padding: 15px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const DocView = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: 3%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`;

export default function Documentos() {
  return (
    <Container>
      <StyledText
        weight={700}
        size={16}
        lh={24}
        color={Colors.mainColorBlack}
        >
          Documentos recientes
        </StyledText>
        <DocView>
          <CajaDoc
          icon1={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
          <CajaDoc
          icon2={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
          <CajaDoc
          icon3={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
           <CajaDoc
          icon1={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
          <CajaDoc
          icon2={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
          <CajaDoc
          icon3={true}
          texto1={"Loremsum matiatus lorem ipsum dolor..."} 
          texto2={"120 kb"} 
          />
        </DocView>
    </Container>
  );
}

import React from "react";
import Colors from "../../../../../constants/Colors";
import CajaDoc from "./CajaDoc/CajaDoc";
import { Container, DocView, StyledText } from "./styles";


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

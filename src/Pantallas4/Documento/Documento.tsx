import React from "react";
import Colors from "../../../constants/Colors";
import BarraIconos from "../../Componentes/BarraIconos";
import Boton from "../../Componentes/Boton";
import BotonAzul from "../../Componentes/BotonAzul";
import DescripDoc from "./DescripDoc/DescripDoc";
import { BarraCont, BottomContainer, Container, Descripcion, Icono, Linea, StyledText } from "./styles";

export default function Documento() {
  return (
    <Container>
      <BarraIconos
        titulo={"Documento"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        add={true}
      />
      <DescripDoc
        icon1={true} 
        categoria={" Yoga • Meditación holística"}
        fecha={" 18/11/2021"} 
        hora={" 4:00PM"}
        peso={" 1200 kb"}
      />
      <BarraCont>
          <Icono
            width={25}
            height={15}
            source={require("../../assets/images/SF.png")} />
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.SecondaryGray}>
            {'Información exclusiva para el profesional'}
          </StyledText>
        </BarraCont>
        <Linea />
        <Descripcion>
        <StyledText
            weight={700}
            size={14}
            lh={18}
            color={Colors.mainColorBlack}
          >
            Descripción del documento
          </StyledText>
          <StyledText
            weight={400}
            size={14}
            lh={16.8}
            color={Colors.mainColorBlack}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada fringilla metus at tincidunt. Proin nec massa nec arcu efficitur fermentum. 
          </StyledText>
          <StyledText
            weight={400}
            size={14}
            lh={16.8}
            color={Colors.mainColorBlack}
          >
            Fusce imperdiet feugiat felis, in ullamcorper quam accumsan ac. Maecenas quis neque sed velit hendrerit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a consequat dui, non consectetur justo.
          </StyledText>
          </Descripcion>
      <BottomContainer>
        <BotonAzul
          ancho={90}
          alto={55.08}
          texto={"VISUALIZAR"}
          icon={""}
        />
        <Boton 
          ancho={90} 
          alto={55.08} 
          texto="DESCARGAR" 
          icon={""} 
        />
      </BottomContainer>
    </Container>
  );
}

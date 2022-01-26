import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "../Componentes/BarraIconos";
import Boton from "../Componentes/Boton";
import BotonAzul from "../Componentes/BotonAzul";
import DescripDoc from "../Componentes/DescripDoc";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px 10px;
`;
export const BottomContainer = styled.View`
  align-items: center; 
`;

export const Descripcion = styled.View`
  align-items: left; 
  padding: 29px;
  row-gap: 5px;
`;

interface StyledTextProps {
  size: number;
  weight: number;
  color: string;
  lh: number;
}

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: ProximaNova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;
const BarraCont = styled.View`
  justify-items: left;
  flex-direction: row;
  column-gap: 7px;
  padding: 5%;
`
interface StyledImgProps {
  width: number;
  height: number;
}

const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const Linea = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${Colors.mainCOlorPurpleDark};
`;

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

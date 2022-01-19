import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraIconos from "../Componentes/BarraIconos";
import BotonAzul from "../Componentes/BotonAzul";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`
export const CenterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ContainerItem = styled.View`
  border-width: 1px; 
  padding: 15px;
  border-color: ${Colors.mainCOlorPurpleLigth};
  border-radius: 8px; 
  height: 61px;
  width: 90%;
  align-self: center;
  row-gap: 5px;
`
export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px;
`
export const BottomContainer = styled.View`

`
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

export default function Agenda4( ) {
  return (
    <Container>
      <BarraIconos
        titulo={"Agendar Asesoría"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
      />
      <ContainerItem>
        <StyledText size={12} weight={700} color= {Colors.colorBoton} lh={14}>
          Fecha y hora de la asesoría:
        </StyledText>
        <CenterContainer>
          <StyledText size={14} weight={700} color= {Colors.mainColorBlack} lh={18}>15 April 2022 </StyledText>
          <StyledText size={14} weight={700} color= {Colors.mainColorBlack} lh={18}>9:00 am - 10:00pm </StyledText>
          <Icon
            name={"unfold_more"}
            color={Colors.mainCOlorPurpleLigth}
            size={15}
          />     
        </CenterContainer>
      </ContainerItem>
      <TextContainer>
      <StyledText size={14} weight={400} color= {Colors.SecondaryGray} lh={18}> Selecciona una fecha para agendar tu asesoría </StyledText>
      </TextContainer>
      {/*Calendario*/}
      <BottomContainer>
      <BotonAzul
      ancho={90}
      alto={55.08}
      texto={"AGENDAR ASESORÍA"}
      icon={""}
      />
      </BottomContainer>
    </Container>
  );
};

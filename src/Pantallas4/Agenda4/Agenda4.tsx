import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../constants/Colors";
import BarraIconos from "../../Componentes/BarraIconos";
import BotonAzul from "../../Componentes/BotonAzul";
import { BottomContainer, CenterContainer, Container, ContainerItem, StyledText, TextContainer } from "./styles";

export default function Agenda4() {
  return (
    <Container>
      <BarraIconos
        titulo={"Agendar Asesoría"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
      />
      <ContainerItem>
        <StyledText size={12} weight={700} color={Colors.colorBoton} lh={14}>
          Fecha y hora de la asesoría:
        </StyledText>
        <CenterContainer>
          <StyledText
            size={14}
            weight={700}
            color={Colors.mainColorBlack}
            lh={18}
          >
            15 April 2022{" "}
          </StyledText>
          <StyledText
            size={14}
            weight={700}
            color={Colors.mainColorBlack}
            lh={18}
          >
            9:00 am - 10:00pm{" "}
          </StyledText>
          <Icon
            name={"unfold-more"}
            color={Colors.mainCOlorPurpleLigth}
            size={22}
          />
        </CenterContainer>
      </ContainerItem>
      <TextContainer>
        <StyledText size={14} weight={400} color={Colors.SecondaryGray} lh={18}>
          {" "}
          Selecciona una fecha para agendar tu asesoría{" "}
        </StyledText>
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
}

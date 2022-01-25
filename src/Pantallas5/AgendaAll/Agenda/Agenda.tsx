import React from "react";
import Colors from "../../../../constants/Colors";
import { Container, Hora, Info, StyledText, TituloView } from "./styles";
import { Icon } from "react-native-elements";

interface datosAgenda {
  titulo: string;
  mes: string;
  dia: string;
}
export default function Agenda(props: datosAgenda) {
  return (
    <Container>
      <Hora>
        <StyledText
          size={12}
          weight={400}
          fs={"normal"}
          lh={18}
          color={Colors.SecondaryGray}
        >
          {props.mes}
        </StyledText>
        <StyledText
          size={32}
          weight={400}
          fs={"italic"}
          lh={24}
          color={Colors.SecondaryGray}
        >
          {props.dia}
        </StyledText>
      </Hora>
      <Info>
        <TituloView>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.mainColorBlack}
          >
            {props.titulo}
          </StyledText>
        </TituloView>
        <Icon
          name={"unfold-more"}
          color={Colors.mainCOlorPurpleLigth}
          size={22}
        />
      </Info>
    </Container>
  );
}

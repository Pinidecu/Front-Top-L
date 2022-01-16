import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Container,
  TituloView,
  LeftView,
  StyledText,
  InfoView,
  StyledImg,
  Clave,
  Valor,
  Linea,
  BotonDisable,
  Boton,
} from "./styles";
import Colors from "../../../../constants/Colors";
import { Icon } from "react-native-elements";
import { Botones } from "../../../Pantallas/StyledComponents/StyledComponents";

interface Props {
  nivel: string;
  area: string;
  centro: string;
  año: string;
  especializacion?: string;
}

export default function InfoEducativa({
  nivel,
  area,
  centro,
  año,
  especializacion,
}: Props) {
  return (
    <Container>
      <TituloView>
        <LeftView>
          <StyledImg
            width={30}
            height={30}
            source={require("../../../../assets/images/badge.png")}
          />
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            Asesoria verificada
          </StyledText>
        </LeftView>
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={30} />
      </TituloView>
      <InfoView>
        <Clave>
          {"Nivel educativo: "}
          <Valor>{nivel}</Valor>
        </Clave>
        <Linea />
        <Clave>
          {"Área de experticia: "}
          <Valor>{area}</Valor>
        </Clave>{" "}
        <Linea />
        <Clave>
          {"Centro educativo: "}
          <Valor>{centro}</Valor>
        </Clave>{" "}
        <Linea />
        <Clave>
          {"Año: "}
          <Valor>{año}</Valor>
        </Clave>
      </InfoView>
      <Botones>
        <BotonDisable>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.bordeDestacado}
          >
            Suprimir
          </StyledText>
        </BotonDisable>
        <Boton>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.mainCOlorPurpleDark}
          >
            Editar
          </StyledText>
        </Boton>
      </Botones>
    </Container>
  );
}

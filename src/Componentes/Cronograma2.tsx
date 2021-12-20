import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Linea } from "../Pantallas/StyledComponents/StyledComponents";
import CuadroHora from "./CuadroHora";
import PerfilProActive from "./PerfilProActive";

interface Props {
  ancho: number;
  alto: number;
  texto: string;
  icon: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

const Container = styled.View`
  background-color: ${Colors.destacado};
  align-items: center;
  justify-content: space-between;
  width: 90%;
  border-radius: 8;
  padding: 10px;
  margin: 5px;
`;

const DiaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Evento = styled.View`
  flex-direction: row;

  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Horario = styled.View`
  flex-direction: row;
`;

const Perfiles = styled.View`
  width: 95%;
  align-items: center;

  margin: 20px;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  align-self: flex-start;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface evento {
  inicio: string;
  fin: string;
  active: boolean;
}
const datosCronograma: evento = { inicio: "9:00", fin: "13:00", active: true };

export default function Cronograma2() {
  return (
    <Container>
      <DiaView>
        <StyledText
          weight={700}
          size={14}
          lh={29}
          color={Colors.mainCOlorPurpleDark}
        >
          Martes 21 de julio
        </StyledText>
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={25} />
      </DiaView>
      <Evento>
        <Horario>
          <CuadroHora
            ancho={110}
            alto={39}
            texto={datosCronograma.inicio}
            icon={"expand-more"}
          />
          <CuadroHora
            ancho={110}
            alto={39}
            texto={datosCronograma.fin}
            icon={"expand-more"}
          />
        </Horario>
        {datosCronograma.active ? (
          <StyledImg
            width={51}
            height={33}
            source={require("../../assets/images/SF.png")}
          />
        ) : (
          <Icon
            name="toggle-off"
            color={Colors.mainCOlorPurpleDark}
            size={50}
          />
        )}
      </Evento>
      <StyledText weight={400} size={14} lh={18} color={Colors.SecondaryGray}>
        Selecciona los pérfiles profesionales con los cuales estarás disponible
        en ese tiempo:
      </StyledText>
      <Perfiles>
        <PerfilProActive
          titulo={"Perfil profesional Alexandra Martinez"}
          active={true}
        />
        <Linea />
        <PerfilProActive
          titulo={"Instructora yoga en Aeroyoga Barranquilla @aeroyogabaq"}
          active={false}
        />
        <Linea />
        <PerfilProActive
          titulo={"Instructora yoga Casa Matuma Cartagena @matumahosectg"}
          active={false}
        />
      </Perfiles>
    </Container>
  );
}

import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import CuadroHora from "./CuadroHora";

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

const Evento = styled.View`
  flex-direction: row;
`;

const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Roboto;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  align-self: flex-start;
  margin: 0px 10px;
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
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
const datosCronograma: evento[] = [
  { inicio: "9:00", fin: "13:00", active: true },
  { inicio: "14:00", fin: "16:00", active: true },
  { inicio: "18:00", fin: "21:00", active: false },
];

export default function Cronograma() {
  return (
    <Container>
      {datosCronograma.map((d) => {
        return (
          <Evento>
            <CuadroHora
              ancho={110}
              alto={39}
              texto={d.inicio}
              icon={"expand-more"}
            />
            <CuadroHora
              ancho={110}
              alto={39}
              texto={d.fin}
              icon={"expand-more"}
            />
            {d.active ? (
              <StyledImg
                width={51}
                height={33}
                source={require("../../assets/images/SF.png")}
              />
            ) : (
              <StyledImg
                width={51}
                height={33}
                source={require("../../assets/images/SF.png")}
              />
            )}
          </Evento>
        );
      })}
      <StyledText
        weight={400}
        size={12}
        lh={29}
        color={Colors.mainCOlorPurpleLigth}
      >
        Editar disponibilidad
      </StyledText>
    </Container>
  );
}

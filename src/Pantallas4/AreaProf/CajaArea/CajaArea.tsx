import React from "react";
import Colors from "../../../../constants/Colors";
import { Container, Containertext, Descripcion, Icono, Linea } from "./styles";

interface Props {
  texto: string;
  icon1?: boolean;
  icon2?: boolean;
}

export default function CajaArea({
  texto,
  icon1,
  icon2
}: Props) {
  return (
    <Container>
    <Containertext width={95} height={22} color={Colors.white}>
        <Descripcion
          weight={700}
          size={16}
          lh={24}
          color={Colors.SecondaryGray}
        >
          {texto}
        </Descripcion>
        {icon1 ? (
          <Icono
            width={16}
            height={16}
            source={require("../../assets/images/Bullet-selected.png")}
          />
        ) : null}
        {icon2 ? (
          <Icono
            width={16}
            height={16}
            source={require("../../assets/images/Bullet-select.png")}
          />
        ) : null}  
    </Containertext>
    <Linea />
    </Container>
  );
}

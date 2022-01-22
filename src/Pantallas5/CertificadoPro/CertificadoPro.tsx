import React from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import { Container, Titulo, TextSubrayado, JCView } from "./styles";
import Colors from "../../../constants/Colors";
import { Icon } from "react-native-elements";
import CajaBlanca from "../../Componentes/CajaBlanca";

export default function CertificadoPro() {
  return (
    <Container>
      <BarraIconos
        tituloAB={"Mis formaciones & académicas"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
        add={true}
      />
      <JCView>
        <Titulo>Mi formaciones académicas</Titulo>
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={25} />
      </JCView>
      <CajaBlanca
        ancho={90}
        alto={40}
        texto1={""}
        texto2={"Docente universitaria"}
        icon={true}
      />
      <CajaBlanca
        ancho={90}
        alto={40}
        texto1={""}
        texto2={"Diploma pregrado"}
        icon={true}
      />
      <CajaBlanca
        ancho={90}
        alto={40}
        texto1={""}
        texto2={"Universidad del Atlántico"}
      />
      <CajaBlanca
        ancho={90}
        alto={40}
        texto1={""}
        texto2={"1993"}
        icon4={true}
      />
      <JCView>
        <TextSubrayado>Agregar otra formación</TextSubrayado>{" "}
        <TextSubrayado>Eliminar</TextSubrayado>
      </JCView>
    </Container>
  );
}

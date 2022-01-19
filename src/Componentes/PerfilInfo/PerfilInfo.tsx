import React from "react";
import {
  Container,
  ContainerSuperior,
  StyledImgPerfil,
  StyledText,
  RigthView,
  StyledImg,
  PuntuacionView,
} from "./styles";
import Colors from "../../../constants/Colors";

interface Props {
  nombre: string;
  profesion: string;
  estrellas: string;
  reviews: string;
}

export default function PerfilInfo({
  nombre,
  profesion,
  estrellas,
  reviews,
}: Props) {
  return (
    <Container>
      <StyledImgPerfil
        width={40}
        height={40}
        radio={"50%"}
        source={require("../../../assets/images/Sala/10.png")}
      />
      <RigthView>
        <ContainerSuperior>
          <StyledText
            size={16}
            weight={400}
            fs={"italic"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {profesion}
          </StyledText>
        </ContainerSuperior>

        <PuntuacionView>
          <StyledImg
            width={20}
            height={20}
            source={require("../../../assets/images/estrella.png")}
          />
          <StyledText
            size={14}
            weight={400}
            fs={"italic"}
            lh={18}
            color={Colors.mainCOlorPurpleDark}
          >
            {estrellas}
          </StyledText>
          <StyledText
            size={12}
            weight={18}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {`(${reviews} reviews)`}
          </StyledText>
        </PuntuacionView>
      </RigthView>
    </Container>
  );
}

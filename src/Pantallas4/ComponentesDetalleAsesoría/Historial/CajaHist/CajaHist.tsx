import React from "react";
import Colors from "../../../../../constants/Colors";
import { BullCont, Container, ImgCont, IndicadorView, LeftCont, LeftView, StyledImg, StyledText, TextoCont } from "./styles";

interface Props {
  cliente: string;
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

export default function CajaHist({ cliente, categoria, fecha, hora, tiempo }: Props) {
  return (
    <Container color={Colors.white}>
      <LeftCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Cliente: 
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {cliente}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Categoría:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {categoria}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Fecha de asesoría:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {fecha}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Hora:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {hora}
          </StyledText>
        </TextoCont>
        <TextoCont>
          <StyledText
            weight={700}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            Tiempo:
          </StyledText>
          <StyledText
            weight={400}
            size={12}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {tiempo}
          </StyledText>
        </TextoCont>
      </LeftCont>
      <ImgCont>
        <IndicadorView>
          <LeftView>
            <StyledText
              size={12}
              weight={400}
              lh={10}
              color={Colors.bordeDestacado}
            >
              Asesoría finalizada
            </StyledText>
          </LeftView>
          <BullCont>
          <StyledImg
            width={16}
            height={16}
            source={require("../../../../../assets/images/BulletGray.png")}
          />
          </BullCont>
        </IndicadorView>
      </ImgCont>
    </Container>
  );
}

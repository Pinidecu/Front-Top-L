import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  cliente: string;
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

interface ContainerProps {
  color: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 129px;
  border-radius: 4px;
  align-self: center;
`;

const TextoCont = styled.View`
  justify-items: left;
  flex-direction: row;
  margin-left: 14px;
  padding: 1px;
`
const LeftCont = styled.View`
  justify-items: left;
  row-gap: 4px;
`
const ImgCont = styled.View`
  flex-direction: row;
  column-gap: 7px;
  padding:1%;
`
const IndicadorView = styled.View`
  background-color: ${Colors.SecondaryLightGray};
  margin-top: 11px;
  margin-bottom: 66px;
  border-radius: 4px;
  flex-direction: row;
  height: 52px;
  width: 110px;
  padding: 5px;
`;

const LeftView = styled.View`
  width: 85%;
  justify-content: center;
  padding: 5px;
`;

const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`
const BullCont = styled.View`
  align-self: right;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

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
            source={require("../../assets/images/BulletGray.png")}
          />
          </BullCont>
        </IndicadorView>
      </ImgCont>
    </Container>
  );
}

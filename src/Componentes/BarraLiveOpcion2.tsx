import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import reloj from "../../assets/images/reloj.png";

interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  width: 90%;
  height: 40px;
  align-self: center;
  margin: 20px;
  background-color: ${Colors.fondoBarraLive2};
  border-radius: 100px;
  justify-content: space-between;
  align-items: center;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const ViewNombres = styled.View`
  justify-content: center;
`;
const LeftContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;
const RightContainer = styled.View`
  flex-direction: row;

  align-items: center;
  margin: 10px;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;

interface Props {
  fotoPerfil: string;
  nombre: string;
  usuario: string;
  hora: string;
}

export default function BarraLiveOpcion2({
  fotoPerfil,
  nombre,
  usuario,
  hora,
}: Props) {
  return (
    <Container>
      <LeftContainer>
        <StyledImg
          width={40}
          height={40}
          radio={"50%"}
          margin={"0"}
          source={{
            uri: `${fotoPerfil}`,
          }}
        />
        <ViewNombres>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={14}
            color={Colors.mainCOlorPurpleDark}
          >
            {nombre}
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainCOlorPurpleDark}
          >
            {usuario}
          </StyledText>
        </ViewNombres>
      </LeftContainer>
      <RightContainer>
        <StyledImg
          width={20}
          height={20}
          radio={""}
          margin={"0"}
          source={{
            uri: `${reloj}`,
          }}
        />
        <StyledText
          size={14}
          weight={400}
          fs={"normal"}
          lh={16.8}
          color={Colors.mainColorBlack}
        >
          {hora}
        </StyledText>
      </RightContainer>
    </Container>
  );
}

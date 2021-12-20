import React from "react";
import { Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
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
  align-items: "flex-start";
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const RigthContainer = styled.View`
  flex-direction: row;
`;
const LeftContainer = styled.View`
  justify-content: center;
`;
const VerHistorial = styled.View`
  background-color=${Colors.SecondaryPurpleLight};
  border-radius: 24px;
  justify-content:center;
  padding:3px 10px;
  border: 1px solid ${Colors.mainCOlorPurpleDark};
`;

const Info = styled.View`
  height: "50%";
  width: 80%;
  justify-content: space-evenly;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 60%;
`;

interface Props {
  nombre: string;
  id: string;
  foto: string;
}

export default function Cliente({ nombre, id, foto }: Props) {
  return (
    <Container>
      <RigthContainer>
        <StyledImg
          width={40}
          height={40}
          source={{
            uri: foto,
          }}
        />
        <Info>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </StyledText>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {id}
          </StyledText>
        </Info>
      </RigthContainer>
      <LeftContainer>
        <VerHistorial>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.mainCOlorPurpleDark}
          >
            Ver historial
          </StyledText>
        </VerHistorial>
      </LeftContainer>
    </Container>
  );
}

import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

interface StyledImgProps {
  width: number;
  height: number;
  radio: number;
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0;
  column-gap: 10;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;
const LeftView = styled.View`
  flex-direction: row;
column-gap: 10px;
`;
const LiveView = styled.View`
  flex-direction: row;
  column-gap: 5px;
  align-items: center;
`;
const Info = styled.View`
  width: 50%;
  justify-content: space-evenly;
`;
const UnirseView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;

interface Props {
  titulo: string;
  imagen: string;
}

export default function SalaLive({ titulo, imagen }: Props) {
  return (
    <Container>
      <LeftView>
        <StyledImg
          width={53}
          height={53}
          radio={8}
          source={{
            uri: imagen,
          }}
        />
        <Info>
          <LiveView>
            <StyledImg
              width={20}
              height={20}
              radio={0}
              source={require("../../assets/images/live 1.png")}
            />
            <StyledText
              size={10}
              weight={700}
              fs={"normal"}
              lh={12}
              color={Colors.mainCOlorPurpleDark}
            >
              En vivo
            </StyledText>
          </LiveView>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={16.8}
            color={Colors.black}
          >
            {titulo}
          </StyledText>
        </Info>
      </LeftView>
      <UnirseView>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleLigth}
        >
          Unirse
        </StyledText>
        <Icon
          name="chevron-right"
          color={Colors.mainCOlorPurpleLigth}
          size={25}
        />
      </UnirseView>
    </Container>
  );
}

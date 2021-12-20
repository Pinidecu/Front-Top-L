import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  titulo: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const ExplorarView = styled.View`
  flex-direction: row;
  margin: 0 10px;
  width: 100%;
  padding: 0px 10px;
  justify-content: space-between;
`;
const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  align-self: center;
`;
const Rigth = styled.View`
  flex-direction: row;

  align-self: center;
`;

export default function Explorar({ titulo }: Props) {
  return (
    <ExplorarView>
      <StyledText
        size={16}
        weight={700}
        fs={"normal"}
        lh={24}
        color={Colors.mainColorBlack}
      >
        {titulo}
      </StyledText>
      <Rigth>
        <StyledText
          size={12}
          weight={700}
          fs={"normal"}
          lh={14}
          color={Colors.mainCOlorPurpleLigth}
        >
          Explorar
        </StyledText>
        <Icon name="chevron-right" color="#5B74FB" size={20} />
      </Rigth>
    </ExplorarView>
  );
}

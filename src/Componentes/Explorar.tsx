import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
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
  column-gap: 5;
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

/* export const styles = StyleSheet.create({
  explorar: {
    flexDirection: "row",
    margin: 10,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  titulo: {
    fontFamily: "Proxima Nova",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#424049",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
    alignSelf: "center",
  },
  text: {
    alignSelf: "center",
    fontFamily: "Proxima Nova",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 14,
    color: "#5B74FB",
  },
});
 */

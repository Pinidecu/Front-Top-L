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
  margin: 10px 0px;
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

  align-items: center;
`;
const LeftContainer = styled.View`
  justify-content: center;
`;

const Info = styled.View`
  height: "50%";
  justify-content: center;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 60%;
`;

interface Props {
  titulo: string;
  tags: string;
  foto: string;
}

export default function Review({ titulo, tags, foto }: Props) {
  return (
    <Container>
      <RigthContainer>
        <StyledImg
          width={30}
          height={30}
          source={require("../../assets/images/verificadosf.png")}
        />
        <Info>
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.mainColorBlack}
          >
            {titulo}
          </StyledText>
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={12}
            color={Colors.SecondaryGray}
          >
            {tags}
          </StyledText>
        </Info>
      </RigthContainer>
      <LeftContainer>
        <StyledImg
          width={60}
          height={60}
          source={{
            uri: foto,
          }}
        />
      </LeftContainer>
    </Container>
  );
}

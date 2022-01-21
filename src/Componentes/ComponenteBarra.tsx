import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
}
interface ContainerProps {
  color: "string";
}

const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  align-items: center;
  flex: 0.25;
  height: 58px;
  justify-content: center;
`;

const ContainerImg = styled.View`
  padding: 10px;
  height: 100%;
  width: 100%;
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
`;

interface Props {
  estado: string;
  foto: string;
  color: string;
}

export default function ComponenteBarra({ estado, foto, color }: Props) {
  return (
    <Container color={color}>
      <ContainerImg>
        {estado === "Ficha Personal" ? (
          <StyledImg
            width={100}
            height={100}
            source={{
              uri: foto,
            }}
          />
        ) : (
          <StyledImg
            width={100}
            height={100}
            source={{
              uri: foto,
            }}
          />
        )}
      </ContainerImg>
    </Container>
  );
}

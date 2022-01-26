import styled from "styled-components/native";

interface StyledImgProps {
  width: number;
  height: number;
}

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  align-items: center;
  flex: 0.25;
  height: 58px;
  justify-content: center;
`;

export const ContainerImg = styled.View`
  padding: 10px;
  height: 100%;
  width: 100%;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
`;

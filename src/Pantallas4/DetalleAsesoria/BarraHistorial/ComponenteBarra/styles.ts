import styled from "styled-components/native";

interface StyledImgProps {
  width: number;
  height: number;
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
  align-items:center;
  justify-content:space-between;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom:5px;
`;


export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: center;
`;
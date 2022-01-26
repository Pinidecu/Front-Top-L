import styled from "styled-components/native";
import Colors from "../../../../../constants/Colors";

interface ContainerProps {
  color: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  row-gap: 5px;
  justify-content: center;
  width: 112px;
  height: 166px;
`;

export const DocCont = styled.View`
  background-color:  ${Colors.white};
  width: 113.37px;
  height: 113.37px;
  justify-content: center;
  align-items:center;
  border-radius: 8px;
`;

export const TextoCont = styled.View`
  justify-items: left;
  row-gap: 2px;
`;

export const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`;

export const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

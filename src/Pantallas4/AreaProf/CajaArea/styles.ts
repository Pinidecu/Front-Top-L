import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface ContainerProps {
  color: string;
  width: number;
  height: number;
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

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Containertext = styled.View<ContainerProps>`
  flex-direction: row;
  background-color: ${(props) => props.color};
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  align-self: center;
  margin: 2%;
`;

export const Descripcion = styled.Text<StyledTextProps>`  
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

export const Linea = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
  margin-top: 11px;
`;
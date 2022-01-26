import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  color: string;
  lh: number;
}

interface StyledImgProps {
  width: number;
  height: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px 10px;
`;

export const BottomContainer = styled.View`
  align-items: center; 
`;

export const Descripcion = styled.View`
  align-items: left; 
  padding: 29px;
  row-gap: 5px;
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: ProximaNova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;

export const BarraCont = styled.View`
  justify-items: left;
  flex-direction: row;
  column-gap: 7px;
  padding: 5%;
`;

export const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Linea = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${Colors.mainCOlorPurpleDark};
`;

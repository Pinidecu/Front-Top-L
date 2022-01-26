import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  sub?: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova; 
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const BusquedaView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 2%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`;

export const CajaBusqueda = styled.View`
  flex-direction: row;
  column-gap: 5;
  background-color: ${Colors.white};
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  width: 85%;
  height: 40;
  border-radius: 4px;
  align-self: center;
  margin: 2%;
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px;
`;

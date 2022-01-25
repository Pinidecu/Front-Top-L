import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  margin:10px 0px;
  justify-content:space-between;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  text-align: left;
`;

export const Info = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-around;
  align-items:center;
  flex-direction: row;
  width: 84%;
  height: 54px;
  padding: 9px 14px;
  text-align: center;
  justify-content: center;
  border-radius: 8px;
`;

export const TituloView = styled.View`
  width: 90%;
`;
export const Hora = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  width: 15%;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

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
  margin-left: 27px;
  justify-content: flex-start;
  align-content: left;  
  flex-direction: row;
  column-gap: 8px;
  margin-top: 25px;
`;

export const NameContainer = styled.View`
  align-items: left;
  margin-bottom: 15px;
  row-gap: 8px;
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px 10px;
`;

export const BottomContainer = styled.View`
  align-items: center; 
`;

export const DocCont = styled.View`
  background-color:  ${Colors.white};
  width: 113.37px;
  height: 113.37px;
  justify-content: center;
  align-items:center;
  border-radius: 8px;
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: ProximaNova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;

export const TextoCont = styled.View`
  justify-items: left;
  flex-direction: row;
  row-gap: 2px;
`;

export const Icono = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
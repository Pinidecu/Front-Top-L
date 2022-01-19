import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

export const Container = styled.View`
  width: 90%;
  align-self: center;
  background-color: ${Colors.destacado};
  border-radius: 8px;
  margin-top: 10px;
  flex-direction: row;
  align-items:center;
  padding: 10px;
`;
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
export const RigthView = styled.View`
  align-items: start;
  justify-content: center;
  margin-bottom:10px;
`;


export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  margin-left: 5px;
  margin-top: 5px;
`;

interface StyledImgProps {
  width: number;
  height: number;
  radio?: any;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;


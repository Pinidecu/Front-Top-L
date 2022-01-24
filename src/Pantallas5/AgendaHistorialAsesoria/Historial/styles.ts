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
  width: 100%;
  justify-content: space-between;
  align-self: center;

  margin-top: 10px;
`;
export const TextView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  margin: 10px;
`;
export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  align-self: center;
`;

export const LineaView = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
`;
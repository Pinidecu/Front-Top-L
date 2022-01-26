import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  padding: 15px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const DocView = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: 3%;
  background-color: ${Colors.SecondaryPurpleLight};
  justify-content: space-between;
`;
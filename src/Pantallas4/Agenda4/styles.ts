import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  color: string;
  lh: number;
}

export const ContainerAll = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`;

export const Container = styled.ScrollView`
`;

export const CenterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerItem = styled.View`
  border-width: 1px;
  border-color: ${Colors.mainCOlorPurpleLigth};
  border-radius: 8px;
  height: 61px;
  width: 90%;
  align-self: center;
  justify-content: center;
  row-gap: 5px;
  padding-left: 25px;
  padding-right: 5px;
`;

export const TextContainer = styled.View`
  width: 90%;
  align-self: center;
  padding: 17px 10px;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 21.28px;
  color: ${Colors.SecondaryGray};
  width: 90%;
  align-self: center;
  margin: 10px 0px;
  text-align: center;
`;

export const BottomContainer = styled.View`
  width: 100%;
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: ProximaNova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
`;

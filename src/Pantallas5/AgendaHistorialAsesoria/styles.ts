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
export const StyledText = styled.Text<StyledTextProps>`
  font-family: ABeeZee;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  ${({ sub }) =>
    sub &&
    `    
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
  `}
`;

export const Container = styled.View`
  align-items: center;
  width: 100%;
  background-color: ${Colors.white};
  justify-content: space-between;
`;


export const ContainerScroll = styled.ScrollView`
  background-color: ${Colors.white};
`;

export const BusquedaView = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 8px;
  width: 90%;
  padding: 1vh;
`;

export const ViewHistorial = styled.View`
  width: 90%;
  margin: 10px;
  align-items: left;
`;
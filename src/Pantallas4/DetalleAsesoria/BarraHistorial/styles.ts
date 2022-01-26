import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
}

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Barra = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Linea = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${Colors.mainCOlorPurpleDark};
`;

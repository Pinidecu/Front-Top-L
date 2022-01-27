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

interface StyledImgProps {
  width: number;
  height: number;
}

export const ScrollContainer = styled.ScrollView`
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  background-color: ${Colors.SecondaryPurpleLight};
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
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

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const RecomendacionView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5%;
  margin: 2%;
  background-color: ${Colors.white};
  justify-content: space-between;
`;

export const DescripcionView = styled.View`
  align-items: center;
  width: 90%;
  row-gap: 10px;
  margin: 2%;
`;

export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const PublicacionView = styled.View`
  width: 90%;
  row-gap: 10px;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`;
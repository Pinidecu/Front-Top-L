import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  sub?: boolean;
}
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

interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ImgView = styled.View`
  margin: 0px 20px;
`;

export const BusquedaView = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 8px;
  width: 90%;
  padding: 1vh;
  flex-direction: row;
  align-items:center;
`;

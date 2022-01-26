import styled from "styled-components/native";
import Colors from "../../../../../../constants/Colors";

interface ContainerProps {
  color: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 129px;
  border-radius: 4px;
  align-self: center;
`;

export const TextoCont = styled.View`
  justify-items: left;
  flex-direction: row;
  margin-left: 14px;
  padding: 1px;
`;

export const LeftCont = styled.View`
  justify-items: left;
  row-gap: 4px;
`;

export const ImgCont = styled.View`
  flex-direction: row;
  column-gap: 7px;
  padding:1%;
`;

export const IndicadorView = styled.View`
  background-color: ${Colors.SecondaryLightGray};
  margin-top: 11px;
  margin-bottom: 66px;
  border-radius: 4px;
  flex-direction: row;
  height: 52px;
  width: 110px;
  padding: 5px;
`;

export const LeftView = styled.View`
  width: 85%;
  justify-content: center;
  padding: 5px;
`;

export const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`;

export const BullCont = styled.View`
  align-self: right;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

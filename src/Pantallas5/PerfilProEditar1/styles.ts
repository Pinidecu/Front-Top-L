import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  margin: number;
}

interface StyledImgIconProps {
  width: number;
  height: number;
}

export const Container = styled.View`  
  background-color: ${Colors.white};
  flex:1;
`;

export const NotiView = styled.View`
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: space-space-between;
  align-self: center;
  margin: 10px 0px;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin}px 0px;
`;

export const StyledImgIcon = styled.Image<StyledImgIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
  color: ${Colors.SecondaryGray};
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;


export const TextSubrayado = styled.Text`
  font-family: Proxima Nova;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  width: 80%;
  align-self: center;
  margin-top: 10px;
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
`;
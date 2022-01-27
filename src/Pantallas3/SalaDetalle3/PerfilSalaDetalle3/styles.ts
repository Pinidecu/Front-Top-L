import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  width:80%;
  align-items: center;
`;

export const Mas = styled.View`
  width: 16px;
  height: 16px;
  margin: 0px;
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  left: 12px;
`;

export const Info = styled.View`
  justify-content: center;
`;

export const UsersContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;

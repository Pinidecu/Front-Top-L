import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";



interface StyledImgProps {
  width: number;
  height: number;
  radio?: any;
  margin?: string;
}
interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

export const Container = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8;
  border: 1px solid ${Colors.bordeDestacado};
  margin: 10px 0px;
`;
export const Info = styled.View`
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin: 15px 0px;
  width: 90%;
`;
export const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0px 5px 0px 20px;
`;
export const Titulo = styled.View`
  width: 80%;
`;
export const LeftContainer = styled.View`
  flex-direction: row;
`;
export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  font-style: ${(props) => props.fs};
`;

export const StyledBookmark = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: -5px;
  right: 10px;
`;



export const MegustaView = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
  width: 90%;
  align-items:center;
  justify-content: space-between;
`;
import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
  fs: string;
}

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 8px;
  border: 1px solid ${Colors.bordeDestacado};
  box-shadow: 0px 0px 8px rgba(157, 164, 181, 0.2);
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 10px;
  column-gap: 10px;
  width: 90%;
`;

export const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;

export const StyledImgIcons = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
  margin: ${(props) => props.margin};
`;

export const Titulo = styled.View`
  width: 80%;
  row-gap: 5px;
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

export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 10px;
  justify-content: space-between;
`;

export const DescripcionView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MegustaView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 90%;
`;

export const Funciones = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const MasView = styled.View`
  border-radius: 50%;
  background-color: ${Colors.SecondaryPurpleLight};
  opacity: 0.9;
  position: absolute;
  top: 38.5px;
  left: 15px;
  z-index: 1;
`;
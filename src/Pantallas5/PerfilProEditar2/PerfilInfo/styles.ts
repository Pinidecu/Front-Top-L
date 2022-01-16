import styled from "styled-components/native";

export const ContainerSuperior = styled.View`
  height: 40px;
`;
export const Container = styled.View`
  flex-direction: row;
  width: 90%;
  margin-top: 20px;
  align-self: center;
`;
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

export const RigthView = styled.View`
  justify-content: center;
`;

export const PuntuacionView = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
  margin-top: 10px;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

interface StyledImgProps {
  width: number;
  height: number;
  radio?: any;
}
export const StyledImgPerfil = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.radio};
  margin-right: 15px;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

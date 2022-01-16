import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

export const Container = styled.View`
  width: 90%;
  align-self: center;
  background-color: ${Colors.destacado};
  border-radius: 8px;
  margin-top: 10px;
`;
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

export const TituloView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 90%;
  align-self: center;
`;
export const LeftView = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 5px;
`;

export const InfoView = styled.View`
  width: 90%;
  align-self: center;
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
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Clave = styled.Text`
  font-family: ABeeZee;
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 14px;
  color: ${Colors.mainColorBlack};
  width: 100%;
  align-self: center;
  margin-top: 10px;
`;

export const Valor = styled.Text`
  font-family: ABeeZee;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 14px;
  color: ${Colors.mainColorBlack};
  width: 100%;
  align-self: center;
  margin-top: 10px;
`;

export const Linea = styled.View`
  width: 100%;
  align-self: center;
  height: 1px;
  background-color: ${Colors.bordeDestacado};
  margin-top: 10px;
`;

export const Botones = styled.View`
  width: 90%;
  align-self:center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`;
export const BotonDisable = styled.View`
  width: 48%;
  align-items: center;
  border: 1px solid ${Colors.bordeDestacado};
  border-radius: 24px;
  height: 30px;
  justify-content: center;
`;

export const Boton = styled.View`
  width: 48%;
  align-items: center;
  border: 1px solid ${Colors.mainCOlorPurpleDark};
  border-radius: 24px;
  height: 30px;
  justify-content: center;
`;

import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.white};
  flex: 1;
`;

export const ContainerInferior = styled.View`
  background-color: ${Colors.white};
  width: 90%;
  align-self: center;
  flex: 0.5;
  justify-content: space-between;
`;
export const Inicio = styled.View`
  width: 100%;
`;

export const Portada = styled.View`
  width: 100%;
  background-color: ${Colors.mainCOlorPurpleDark};
  flex: 0.5;
  justify-content: space-between;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 32px;
  font-weight: 400;
  font-style: italic;
  line-height: 36px;
  color: ${Colors.white};
  width: 80%;
  align-self: center;
  margin-bottom: 40px;
`;

export const SubTitulo = styled.Text`
  font-family: ABeeZee;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  margin-top: 20px;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const Crear = styled.Text`
  font-family: ABeeZee;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  margin-top: 20px;
`;
export const CrearNegro = styled.Text`
  font-family: ABeeZee;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 29px;
  color: ${Colors.mainColorBlack};
  margin-top: 20px;
  align-self: center;
  margin-bottom:20px;
`;

import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const ContainerPrincipal = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;

export const ContainerSuperior = styled.View`
  background-color: ${Colors.SecondaryPurpleLight};
  align-items: center;
  justify-content: center;
  width: 100%;
  align-self: center;
`;

export const ContainerInferior = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  align-self: center;
  padding: 10px 10px 0 10px;
`;
export const Navegacion = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
`;
export const Titulo = styled.TouchableOpacity`
  flex-direction: row;

  margin: 10px;
  padding: 0 10px;
  z-index: 1;
`;

export const TituloText = styled.Text`
  color: ${Colors.colorBoton};
  font-family: Proxima Nova;
  font-weight: bold;
  font-style: normal;
  font-size: 12;
  line-height: 18;
`;

export const Botones = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 10px;
`;

export const DestacadoView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  column-gap:5px;
`;

export const ActividadView = styled.View`
  width: 100%;
  padding: 0 10px;
`;

export const PublicacionView = styled.View`
  width: 100%;
  margin: 20px;
  padding: 0 10px;
`;

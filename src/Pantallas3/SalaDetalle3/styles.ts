import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

interface datosPerfilSalaDetalle {
  descripcion: string;
  tags: string;
}

export const ViewTexts = styled.View`
  width: 90%;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

export const ContainerPrincipalSala = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;

export const ContainerSuperior = styled.View`
  width: 100%;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
`;

export const ContainerInferior = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Colors.SecondaryPurpleLight};
  align-items: center;
  justify-content: space-between;
`;

export const BotonesLlamada = styled.View`
  align-items: center;
  justify-content: space-between;
  row-gap: 10px;
  padding: 10px;
`;

export const IconosLlamada = styled.View`
  flex-direction: row;
  column-gap: 10px;
`;

export const datos: datosPerfilSalaDetalle = {
  descripcion:
    "El Yoga como filosofia de vida y harmoía con el universo para ti, para mí y para todos! Aeroyogabaq",
  tags: "Bienestar físico • Yoga",
};

export const FlatList1 = styled.View`
  width: 90%;
  align-items: center;
  padding: 0px;
  margin: 10px 0px;
`;
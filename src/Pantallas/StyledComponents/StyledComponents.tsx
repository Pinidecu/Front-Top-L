import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

// PERFIL

export const ContainerPrincipal = styled.View`
  background-color: ${Colors.white};/* 
  flex:1; */
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
  column-gap: 5px;
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
  column-gap: 10px;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
  overflow: hidden;
`;

export const Puntaje = styled.Text`
  color: ${Colors.mainCOlorPurpleDark};
  font-family: Proxima Nova;
  font-weight: 700;
  font-style: normal;
  font-size: 14;
  line-height: 18;
`;

export const Parentesis = styled.Text`
  color: ${Colors.SecondaryGray};
  font-family: Proxima Nova;
  font-weight: 400;
  font-style: normal;
  font-size: 12;
  line-height: 18;
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

export const ContainerAgenda = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 90%;
`;

export const Linea = styled.View`
  width: 100%;
  height: 1px;/* 
  margin: 10px; */
  background-color: ${Colors.bordeDestacado};
`;

export const TextoConfiguracion = styled.Text`
  color: ${Colors.SecondaryGray};
  font-family: Proxima Nova;
  font-weight: 400;
  font-style: normal;
  font-size: 14;
  line-height: 16.8;
  width: 90%;
  text-align: left;
  margin: 10px;
`;

// LIVE

export const ContainerPrincipalLive = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Colors.white};
  overflow: hidden;
`;

export const ContainerPrincipalEventoLive = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${Colors.white};
`;

export const ContainerPrincipalSala = styled.View`
  flex: 1;
  background-color: ${Colors.white};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;

interface LineaColorProps {
  color: string;
  height: string;
  width: string;
}
export const LineaColor = styled.View<LineaColorProps>`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 100px;
`;


export const ContainerPrincipalAgenda = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;


export const ContainerPrincipalEquipos = styled.View`
  background-color: ${Colors.white};
  align-items: center;
  justify-content: center;
  width: 100%;
  align-self: center;
  font-family: Cambria;
`;
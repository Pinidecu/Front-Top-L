/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type loginStackParamList = {
  List: undefined;
  Inicio: undefined;
  Explorar: undefined;
  Publicacion: undefined;
  PerfilPublico: undefined;
  PerfilProPublico: undefined;
  PerfilVistaPersonal: undefined;
  PerfilProEdicion: undefined;
  EquipoDetalle1: undefined;
  EquipoDetalle2: undefined;
  Salas: undefined;
  AsesoriaLiveOpcion2: undefined;
  EventoLive: undefined;
  SalaDetalle: undefined;
  AgendaDia: undefined;
  HorariosTarifas: undefined;
  EventoDetalle: undefined;
  HorariosTarifas2: undefined;
};

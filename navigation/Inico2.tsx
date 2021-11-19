import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import PerfilProPublico from "../src/Pantallas/Perfil-ProPublico/Perfil-ProPublico";
import PerfilVistaPersonal from "../src/Pantallas/Perfil-VistaPersonal/Perfil-VistaPersonal";
import PerfilProEdicion from "../src/Pantallas/Menu-perfilPro-Edicion/Perfil-ProEdicion";
import Payment from "../src/Pantallas2/Payment/Payment";
import AgendaHistorial from "../src/Pantallas2/AgendaHistorial/AgendaHistorial";
import ListaClientes from "../src/Pantallas2/ListaClientes/ListaClientes";
import NewEquipo from "../src/Pantallas2/NewEquipo/NewEquipo";
import NewElement from "../src/Pantallas2/NewElement/NewElement";




const Stack = createStackNavigator();
export const Inicio2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NewElement" component={NewElement} />
      <Stack.Screen name="NewEquipo" component={NewEquipo} />
      <Stack.Screen name="ListaClientes" component={ListaClientes} />
      <Stack.Screen name="AgendaHistorial" component={AgendaHistorial} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PerfilProEdicion" component={PerfilProEdicion} />
    </Stack.Navigator>
  );
};

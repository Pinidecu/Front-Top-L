import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import PerfilProPublico from "../src/Pantallas/Perfil-ProPublico/Perfil-ProPublico";
import PerfilVistaPersonal from "../src/Pantallas/Perfil-VistaPersonal/Perfil-VistaPersonal";
import PerfilProEdicion from "../src/Pantallas/Menu-perfilPro-Edicion/Perfil-ProEdicion";
import Equipos from "../src/Pantallas/Equipos/Equipos";
import EquipoDetalle1 from "../src/Pantallas/Equipo-Detalle-1/Equipo-Detalle1";
import EquipoDetalle2 from "../src/Pantallas/Equipo-Detalle-2/Equipo-Detalle2";
import Salas from "../src/Pantallas/Salas/Salas";

const Stack = createStackNavigator();
export const EquiposTab = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Equipos"}
    >
      <Stack.Screen name="Equipos" component={Equipos} />
      <Stack.Screen name="EquipoDetalle1" component={EquipoDetalle1} />
      <Stack.Screen name="EquipoDetalle2" component={EquipoDetalle2} />
      <Stack.Screen name="Salas" component={Salas} />
      <Stack.Screen
        name="PerfilVistaPersonal"
        component={PerfilVistaPersonal}
      />
      <Stack.Screen name="PerfilProEdicion" component={PerfilProEdicion} />
    </Stack.Navigator>
  );
};

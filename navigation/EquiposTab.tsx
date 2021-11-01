import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import PerfilProPublico from "../src/Pantallas/Perfil-ProPublico/Perfil-ProPublico";
import PerfilVistaPersonal from "../src/Pantallas/Perfil-VistaPersonal/Perfil-VistaPersonal";
import PerfilProEdicion from "../src/Pantallas/Menu-perfilPro-Edicion/Perfil-ProEdicion";
import Equipos from "../src/Pantallas/Equipos/Equipos";



const Stack = createStackNavigator();
export const EquiposTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilPublico" component={Equipos} />
      <Stack.Screen name="PerfilProPublico" component={PerfilProPublico} />
      <Stack.Screen
        name="PerfilVistaPersonal"
        component={PerfilVistaPersonal}
      />
      <Stack.Screen name="PerfilProEdicion" component={PerfilProEdicion} />
    </Stack.Navigator>
  );
};

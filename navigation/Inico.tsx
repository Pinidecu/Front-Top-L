import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import PerfilProPublico from "../src/Pantallas/Perfil-ProPublico/Perfil-ProPublico";

const Stack = createStackNavigator();
export const Inicio = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PerfilPublico" component={PerfilPublico} />
      <Stack.Screen name="PerfilProPublico" component={PerfilProPublico} />
    </Stack.Navigator>
  );
};

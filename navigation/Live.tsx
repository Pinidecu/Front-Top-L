import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import PerfilProPublico from "../src/Pantallas/Perfil-ProPublico/Perfil-ProPublico";
import PerfilVistaPersonal from "../src/Pantallas/Perfil-VistaPersonal/Perfil-VistaPersonal";
import PerfilProEdicion from "../src/Pantallas/Menu-perfilPro-Edicion/Perfil-ProEdicion";
import AsesoriaLive from "../src/Pantallas/Asesoria-Live/Asesoria-Live";
import AsesoriaLiveOpcion2 from "../src/Pantallas/Asesoria-Live-Opcion2/Asesoria-Live-Opcion2";

const Stack = createStackNavigator();
export const Live = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AsesoriaLive" component={AsesoriaLive} />
        <Stack.Screen
          name="AsesoriaLiveOpcion2"
          component={AsesoriaLiveOpcion2}
        />
        <Stack.Screen
          name="PerfilVistaPersonal"
          component={PerfilVistaPersonal}
        />
        <Stack.Screen name="PerfilProEdicion" component={PerfilProEdicion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

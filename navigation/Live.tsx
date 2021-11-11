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
import EventoLive from "../src/Pantallas/Evento-Live/Evento-Live";
import SalaDetalle from "../src/Pantallas/Sala-Detalle/Sala-Detalle";
import AgendaDia from "../src/Pantallas/Agenda-Dia/AgendaDia";
import HorariosTarifas from "../src/Pantallas/Horarios&Tarifas-1/Horarios&Tarifas";
import EventoDetalle from "../src/Pantallas/Evento-Detalle/Evento-Detalle";
import HorariosTarifas2 from "../src/Pantallas/Horarios&Tarifas-2/Horarios&Tarifas2";

const Stack = createStackNavigator();
export const Live = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"AsesoriaLiveOpcion2"}
      >
        <Stack.Screen name="AsesoriaLive" component={AsesoriaLive} />
        <Stack.Screen
          name="AsesoriaLiveOpcion2"
          component={AsesoriaLiveOpcion2}
        />
        <Stack.Screen name="EventoLive" component={EventoLive} />
        <Stack.Screen name="SalaDetalle" component={SalaDetalle} />
        <Stack.Screen name="AgendaDia" component={AgendaDia} />
        <Stack.Screen name="HorariosTarifas" component={HorariosTarifas} />
        <Stack.Screen name="EventoDetalle" component={EventoDetalle} />
        <Stack.Screen name="HorariosTarifas2" component={HorariosTarifas2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

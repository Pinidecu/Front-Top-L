import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilProEditar1 from "../src/Pantallas5/PerfilProEditar1/PerfilProEditar1";
import PerfilProEditar2 from "../src/Pantallas5/PerfilProEditar2/PerfilProEditar2";
import PerfilContenidoCreado from "../src/Pantallas5/PerfilContenidoCreado/PerfilContenidoCreado";
import CertificadoPro from "../src/Pantallas5/CertificadoPro/CertificadoPro";
import PerfilAjusteAsesoria from "../src/Pantallas5/PerfilAjusteAsesoria/PerfilAjusteAsesoria";
import AgendaAll from "../src/Pantallas5/AgendaAll/AgendaAll";
import AgendaHistorialAsesoria from "../src/Pantallas5/AgendaHistorialAsesoria/AgendaHistorialAsesoria";


const Stack = createStackNavigator();
export const Inicio5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AgendaHistorialAsesoria"
        component={AgendaHistorialAsesoria}
      />
      <Stack.Screen name="AgendaAll" component={AgendaAll} />
      <Stack.Screen
        name="PerfilAjusteAsesoria"
        component={PerfilAjusteAsesoria}
      />
      <Stack.Screen name="CertificadoPro" component={CertificadoPro} />
      <Stack.Screen
        name="PerfilContenidoCreado"
        component={PerfilContenidoCreado}
      />
      <Stack.Screen name="PerfilProEditar1" component={PerfilProEditar1} />
      <Stack.Screen name="PerfilProEditar2" component={PerfilProEditar2} />
    </Stack.Navigator>
  );
};

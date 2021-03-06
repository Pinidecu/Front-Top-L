import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilProEditar1 from "../src/Pantallas5/PerfilProEditar1/PerfilProEditar1";
import PerfilProEditar2 from "../src/Pantallas5/PerfilProEditar2/PerfilProEditar2";
import PerfilContenidoCreado from "../src/Pantallas5/PerfilContenidoCreado/PerfilContenidoCreado";
import CertificadoPro from "../src/Pantallas5/CertificadoPro/CertificadoPro";
import PerfilAjusteAsesoria from "../src/Pantallas5/PerfilAjusteAsesoria/PerfilAjusteAsesoria";
import AgendaAll from "../src/Pantallas5/AgendaAll/AgendaAll";
import AgendaHistorialAsesoria from "../src/Pantallas5/AgendaHistorialAsesoria/AgendaHistorialAsesoria";
import CuentaLogin from "../src/Pantallas5/CuentaLogin/CuentaLogin";
import PerfilVistaPersonalPro from "../src/Pantallas5/PerfilVistaPersonalPro/PerfilVistaPersonalPro";
import MessageSucces from "../src/Pantallas5/MessageSucces/MessageSucces";
import Home2 from "../src/Pantallas5/Home2/Home2";


const Stack = createStackNavigator();
export const Inicio5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="MessageSucces" component={MessageSucces} />
      <Stack.Screen
        name="PerfilVistaPersonalPro"
        component={PerfilVistaPersonalPro}
      />
      <Stack.Screen name="CuentaLogin" component={CuentaLogin} />
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

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
import CertificadoPro from "../src/Pantallas2/CertificadoPro/CertificadoPro";
import CertificadoPro2 from "../src/Pantallas2/CertificadoPro2/CertificadoPro2";
import CertificadoPro3 from "../src/Pantallas2/CertificadoPro3/CertificadoPro3";
import CertificadoPro4 from "../src/Pantallas2/CertificadoPro4/CertificadoPro4";
import Agenda from "../src/Pantallas2/Agenda/Agenda";
import ReviewAsesoria from "../src/Pantallas2/ReviewAsesoria/ReviewAsesoria";
import ReviewApp from "../src/Pantallas2/ReviewApp/ReviewApp";
import ReviewApp2 from "../src/Pantallas2/ReviewApp2/ReviewApp2";
import PerfilAjuste from "../src/Pantallas2/PerfilAjuste/PerfilAjuste";
import Notificaciones from "../src/Pantallas2/Notificaciones/Notificaciones";




const Stack = createStackNavigator();
export const Inicio2 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notificaciones" component={Notificaciones} />
      <Stack.Screen name="PerfilAjuste" component={PerfilAjuste} />
      <Stack.Screen name="ReviewApp2" component={ReviewApp2} />
      <Stack.Screen name="ReviewApp" component={ReviewApp} />
      <Stack.Screen name="ReviewAsesoria" component={ReviewAsesoria} />
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="CertificadoPro4" component={CertificadoPro4} />
      <Stack.Screen name="CertificadoPro3" component={CertificadoPro3} />
      <Stack.Screen name="CertificadoPro2" component={CertificadoPro2} />
      <Stack.Screen name="CertificadoPro" component={CertificadoPro} />
      <Stack.Screen name="NewElement" component={NewElement} />
      <Stack.Screen name="NewEquipo" component={NewEquipo} />
      <Stack.Screen name="ListaClientes" component={ListaClientes} />
      <Stack.Screen name="AgendaHistorial" component={AgendaHistorial} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PerfilProEdicion" component={PerfilProEdicion} />
    </Stack.Navigator>
  );
};

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Agenda4 from "../src/Pantallas4/Agenda4/Agenda4";
import Busqueda from "../src/Pantallas4/Busqueda/Busqueda";
import DetalleAsesoria from "../src/Pantallas4/DetalleAsesoria/DetalleAsesoria";
import AreaProf from "../src/Pantallas4/AreaProf/AreaProf";
import Documento from "../src/Pantallas4/Documento/Documento";
const Stack = createStackNavigator();
export const Inicio4 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Documento" component={Documento} />
      <Stack.Screen name="AreaProf" component={AreaProf} />
      <Stack.Screen name="DetalleAsesoria" component={DetalleAsesoria} />
      <Stack.Screen name="Busqueda" component={Busqueda} />
      <Stack.Screen name="Agenda4" component={Agenda4} />
    </Stack.Navigator>
  );
};

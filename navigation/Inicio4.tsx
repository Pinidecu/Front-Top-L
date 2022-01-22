import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Agenda4 from "../src/Pantallas4/Agenda4";
import Busqueda from "../src/Pantallas4/Busqueda";
import DetalleAsesoria from "../src/Pantallas4/DetalleAsesoria";

const Stack = createStackNavigator();
export const Inicio4 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DetalleAsesoria" component={DetalleAsesoria} />
      <Stack.Screen name="Busqueda" component={Busqueda} />
      <Stack.Screen name="Agenda4" component={Agenda4} />
    </Stack.Navigator>
  );
};

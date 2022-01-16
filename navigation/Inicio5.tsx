import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PerfilProEditar1 from "../src/Pantallas5/PerfilProEditar1/PerfilProEditar1";
import PerfilProEditar2 from "../src/Pantallas5/PerfilProEditar2/PerfilProEditar2";


const Stack = createStackNavigator();
export const Inicio5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PerfilProEditar2" component={PerfilProEditar2} />
      <Stack.Screen name="PerfilProEditar1" component={PerfilProEditar1} />
    </Stack.Navigator>
  );
};

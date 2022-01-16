import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recomendacion from "../src/Pantallas3/Recomendacion";
import PerfilProEditar1 from "../src/Pantallas5/PerfilProEditar1/PerfilProEditar1";


const Stack = createStackNavigator();
export const Inicio5 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PerfilProEditar1" component={PerfilProEditar1} />
    </Stack.Navigator>
  );
};

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recomendacion from "../src/Pantallas3/Recomendacion";
import GenteTop from "../src/Pantallas3/GenteTop";

const Stack = createStackNavigator();
export const Inicio3 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GenteTop" component={GenteTop} />
      <Stack.Screen name="Recomendacion" component={Recomendacion} />
    </Stack.Navigator>
  );
};

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recomendacion from "../src/Pantallas3/Recomendacion";

const Stack = createStackNavigator();
export const Inicio3 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Recomendacion" component={Recomendacion} />
    </Stack.Navigator>
  );
};

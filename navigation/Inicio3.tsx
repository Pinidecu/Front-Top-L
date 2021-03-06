import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Recomendacion from "../src/Pantallas3/Recomendacion/Recomendacion";
import GenteTop from "../src/Pantallas3/GenteTop/GenteTop";
import NewRespuesta from "../src/Pantallas3/NewRespuesta/NewRespuesta";
import SalaDetalle3 from "../src/Pantallas3/SalaDetalle3/SalaDetalle3";

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
      <Stack.Screen name="NewRespuesta" component={NewRespuesta} />
      <Stack.Screen name="SalaDetalle3" component={SalaDetalle3} />
      
    </Stack.Navigator>
  );
};

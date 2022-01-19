import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Agenda4 from "../src/Pantallas4/Agenda4";


const Stack = createStackNavigator();
export const Inicio4 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Agenda4" component={Agenda4} />
      
    </Stack.Navigator>
  );
};

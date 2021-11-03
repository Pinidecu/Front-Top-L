import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BarraIconos from "../src/Componentes/BarraIconos";
import Destacado from "../src/Componentes/Destacado";
import Explorar from "../src/Componentes/Explorar";
import PerfilPublico from "../src/Pantallas/Perfil-Publico/Perfil-Publico";
import Publicacion from "../src/Componentes/Publicacion";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import Actividad from "../src/Componentes/Actividad";
import { Inicio } from "./Inico";
import { EquiposTab } from "./EquiposTab";
import InfoPro from "../src/Componentes/InfoPro";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "home";

            switch (route.name) {
              case "Inicio":
                iconName = "home";
                break;
              case "Equipos":
                iconName = "videocam";
                break;
              case "Explorar":
                iconName = "online-prediction";
                break;
              case "Perfil":
                iconName = "person-outline";
                break;

              default:
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: `${Colors.mainCOlorPurpleDark}`,
          tabBarInactiveTintColor: `${Colors.SecondaryGray}`,
        })}
      >
        <Tab.Screen name="Equipos" component={EquiposTab} />
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Explorar" component={() => <InfoPro />} />
        <Tab.Screen name="Perfil" component={() => <Publicacion />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

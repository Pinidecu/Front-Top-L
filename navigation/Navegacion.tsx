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
import {
  HomeOutlined,
  VideoCameraOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Actividad from "../src/Componentes/Actividad";
import { Inicio } from "./Inico";
import InfoPro from "../src/Componentes/InfoPro";


const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarIcon: () => <HomeOutlined style={{ color: "#5B74FB" }} />,
          }}
        />
        <Tab.Screen
          name="Salas"
          component={() => <Explorar titulo={"Contenido destacado"} />}
          options={{
            tabBarIcon: () => (
              <VideoCameraOutlined style={{ color: "#5B74FB" }} />
            ),
          }}
        />
        <Tab.Screen
          name="Explorar"
          component={() => <InfoPro />}
          options={{
            tabBarIcon: () => (
              <Icon name="online-prediction" color="#5B74FB" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={() => <Publicacion />}
          options={{
            tabBarIcon: () => <UserOutlined style={{ color: "#5B74FB" }} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

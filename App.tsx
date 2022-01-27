import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Inicio5 } from "./navigation/Inicio5";
import { Live } from "./navigation/Live";
import Navegacion from "./navigation/Navegacion";
import Navegacion2 from "./navigation/Navegacion2";
import Navegacion3 from "./navigation/Navegacion3";
import Navegacion4 from "./navigation/Navegacion4";
import Navegacion5 from "./navigation/Navegacion5";
import PerfilProEditar1 from "./src/Pantallas5/PerfilProEditar1/PerfilProEditar1";

export default function App() {
  return <Navegacion3 />;
}

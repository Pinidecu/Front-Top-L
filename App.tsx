import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Live } from "./navigation/Live";
import Navegacion from "./navigation/Navegacion";

export default function App() {
  return <Navegacion />;
}

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EquiposTab } from "./EquiposTab";
import Colors from "../constants/Colors";
import { Live } from "./Live";
import { Inicio3 } from "./Inicio3";
import styled from "styled-components/native";

interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Tab = createBottomTabNavigator();

export default function Navegacion3() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let imagen = "Icon-Home";

            switch (route.name) {
              case "Inicio":
                imagen = "Icon-Home";
                break;
              case "Salas":
                imagen = "Icon-Salas";
                break;
              case "Eventos":
                imagen = "Icon-Livevideo";
                break;
              case "GenteTop":
                imagen = "Icon-Community";
                break;
              case "Perfil":
                imagen = "Icon-Profile";
                break;

              default:
                break;
            }

            return (
              <StyledImg
                width={25}
                height={25}
                source={require(`../assets/images/NavP3/${imagen}.png`)}
              />
            );
          },
          tabBarActiveTintColor: `${Colors.mainCOlorPurpleDark}`,
          tabBarInactiveTintColor: `${Colors.SecondaryGray}`,
        })}
      >
        <Tab.Screen name="Inicio" component={Inicio3} />
        <Tab.Screen name="Salas" component={EquiposTab} />
        <Tab.Screen name="Eventos" component={Live} />
        <Tab.Screen name="GenteTop" component={Live} />
        <Tab.Screen name="Perfil" component={Live} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

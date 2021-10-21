import React from "react";
import { StyleSheet, Text, View, Image, addons } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { ListItem, Avatar } from "react-native-elements";
import { BottomSheet } from "react-native-elements/dist/bottomSheet/BottomSheet";

interface areas {
  logo: string;
  titulo: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  width: 100%;
  margin-top: 10;
  column-gap: 10;
`;

let lista: areas[] = [
  {
    logo: "",
    titulo: "Información personal",
  },
  {
    logo: "verificadosf.png",
    titulo: "Información acádemica",
  },
  {
    logo: "verificadosf.png",
    titulo: "Áreas de experticia",
  },
  {
    logo: "verificadosf.png",
    titulo: "Antecedentes",
  },
  {
    logo: "",
    titulo: "Idiomas",
  },
];

export default function InfoPro() {
  return (
    <Container>
      {lista.map((l, i) => (
        <ListItem key={i} bottomDivider={i < lista.length - 1 ? true : false}>
          {/* {l.logo === "" ? null:
            <Avatar
              source={
                l.logo === "" ? null : require(`../../assets/images/${l.logo}`)
              }
            />            
          } */}
          <ListItem.Content>
            <ListItem.Title>{l.titulo}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron size={25} color={Colors.mainCOlorPurpleLigth} />
        </ListItem>
      ))}
    </Container>
  );
}

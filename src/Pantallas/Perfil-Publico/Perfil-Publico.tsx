import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import { styles } from "./Perfil-Publico.module";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Destacado from "../../Componentes/Destacado";
import Actividad from "../../Componentes/Actividad";
import Publicacion from "../../Componentes/Publicacion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";


type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

export default function PerfilPublico({navigation}:Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <BarraIconos titulo={""} />
          <TouchableOpacity
            style={styles.titulo}
            onPress={() => {
              navigation.navigate("PerfilProPublico");
            }}
          >
            <Text style={styles.tituloText}>Perfil profesional</Text>
            <Icon
              name="arrow-right-bold"
              type="material-community"
              color="#4E31EB"
              size={20}
            />
          </TouchableOpacity>
          <Info />
          <View style={styles.botones}>
            <BotonAzul
              ancho={177}
              alto={55.08}
              texto={"AGENDAR ASESORIA"}
              icon={""}
            />
            <BotonAzul
              ancho={155}
              alto={55.08}
              texto={"MENSAGE"}
              icon={"forum"}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <Explorar titulo={"Contenido destacado"} />
          <View style={styles.destacado}>
            <Destacado />
            <Destacado />
          </View>
          <Explorar titulo={"Actividad"} />
          <View style={styles.actividad}>
            <Actividad />
            <Actividad />
          </View>{" "}
          <View style={styles.publicacion}>
            <Publicacion />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

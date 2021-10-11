import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import Info from "../../Componentes/info";
import BotonAzul from "../../Componentes/BotonAzul";
import { Icon } from "react-native-elements";
import { styles } from "./Perfil-ProPublico.module";
import BarraIconos from "../../Componentes/BarraIconos";
import Explorar from "../../Componentes/Explorar";
import Destacado from "../../Componentes/Destacado";
import Actividad from "../../Componentes/Actividad";
import Publicacion from "../../Componentes/Publicacion";
import { StackNavigationProp } from "@react-navigation/stack";
import { loginStackParamList } from "../../../types";
import Colors from "../../../constants/Colors";
import TextoGris from "../../Componentes/TextoGris";
import InfoPro from "../../Componentes/InfoPro";

type Props = {
  navigation: StackNavigationProp<loginStackParamList, "List">;
};

let textoGris: string =
  "Aquí encontrarás toda la información y publicaciones sobre éste perfil profesional.";

export default function PerfilProPublico({ navigation }: Props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container1}>
          <BarraIconos titulo={""} />
          <View style={styles.navegacion}>
            <TouchableOpacity
              style={styles.titulo}
              onPress={() => {
                navigation.navigate("PerfilProPublico");
              }}
            >
              <Icon
                name="arrow-left-bold"
                type="material-community"
                color="#4E31EB"
                size={20}
              />
              <Text style={styles.tituloText}>Perfil social</Text>
            </TouchableOpacity>
            <View style={styles.titulo}>
              <Icon
                name="star-border"
                color={Colors.mainCOlorPurpleDark}
                size={20}
              />
              <Text style={styles.puntaje}>4.5</Text>
              <Text style={styles.parentesis}>(128)</Text>
            </View>
          </View>
          <Info />
          <View style={styles.botones}>
            <BotonAzul
              ancho={344}
              alto={55.08}
              texto={"AGENDAR ASESORÍA"}
              icon={""}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <TextoGris texto={textoGris} />
          <InfoPro />
        </View>
      </View>
    </ScrollView>
  );
}

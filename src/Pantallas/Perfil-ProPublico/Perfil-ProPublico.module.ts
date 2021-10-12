import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";


export const styles = StyleSheet.create({
  
  puntaje: {
    color: Colors.mainCOlorPurpleDark,
    fontFamily: "Proxima Nova",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 18,
  },
  parentesis: {
    color: Colors.SecondaryGray,
    fontFamily: "Proxima Nova",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
  },

  actividad: {
    width: "100%",
    paddingRight: 10,
    paddingLeft: 10,
  },
  publicacion: {
    width: "100%",
    margin: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
});

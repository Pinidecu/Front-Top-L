import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  asd:{
        backgroundColor: "red",
        height:1500

  },
  container: {
    flex: 1,
    backgroundColor: "#F9F7FE",
    alignItems: "center",
    justifyContent: "center",
    width: 383,
    alignSelf: "center",
  },
  container1: {
    backgroundColor: "#F9F7FE",
    alignItems: "center",
    justifyContent: "center",
    width: 383,
    alignSelf: "center",
  },
  container2: {
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    width: 383,
    alignSelf: "center",
  },
  iconos: {
    flexDirection: "row",
    width: "100%",
    margin: 20,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-between",
  },
  rigth: {
    flexDirection: "row",
    columnGap: 5,
  },
  titulo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    columnGap: 5,
    margin: 10,
    paddingRight: 10,
    zIndex: 1,
  },
  tituloText: {
    color: "#4E31EB",
    fontFamily: "Proxima Nova",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 18,
  },
  botones: {
    width: 344,
    marginTop: 15,
    padding: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  destacado: {
    flexDirection: "row",
    columnGap: 10,
    alignItems: "flex-start",
    width: "100%",
    padding: 10,
    overflow: "hidden",
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

import React from "react";
import {
  Container,
  StyledBookmark
} from "./styles";
import foto from "../../../assets/images/Portada/1.png";
import Barra from "../Barra/Barra";

export default function Portada() {
  return (
    <Container foto={foto}>
      <Barra />
      <StyledBookmark
        width={30}
        height={37}
        source={require("../../../assets/images/bookmark-clicked.png")}
      />
    </Container>
  );
}

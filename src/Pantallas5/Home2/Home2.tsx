import React from "react";
import {
  Container,
  PublicacionView,
} from "./styles";
import BarraLogo from "./BarraLogo/BarraLogo";
import Busqueda from "./Busqueda/Busqueda";
import Publicacion from "../../Componentes/Publicacion";
import fotoPerfilPublicacion from "../../../assets/images/Sala/10.png";
import fotoPubliacacion from "../../../assets/images/Publicacion.png";
import fotoCard from "../../../assets/images/Equipo1.png";
import PublicacionHome from "./PublicacionHome/PublicacionHome";
import CardHome from "./CardHome/CardHome";

export default function Home2() {
  return (
    <Container>
      <BarraLogo />
      <Busqueda texto={"Busca un profesional, área o servicio"} />
      <PublicacionView>
        <Publicacion
          fotoPerfil={fotoPerfilPublicacion}
          nombre={"Armando Lopez • @arlopez21 • 2h"}
          descripcion={"Group name lorem ipsum dolor amet sim athem"}
          imagen={fotoPubliacacion}
        />
        <CardHome
          tags={"Category •  Nombre del creador "}
          nombre={"Primer encuentro de yoga en movimiento principiantes"}
          fecha={"Jueves, 21 Junio, 2021 1:00 PM -05:00PM"}
          imagen={fotoCard}
        />
        <PublicacionHome
          fotoPerfil={fotoPerfilPublicacion}
          nombre={"Armando Lopez • @arlopez21 • 2h"}
          descripcion={"Group name lorem ipsum dolor amet sim athem"}
          imagen={fotoPubliacacion}
        />
      </PublicacionView>
    </Container>
  );
}

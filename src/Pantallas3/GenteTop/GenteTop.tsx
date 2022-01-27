import React from "react";
import Colors from "../../../constants/Colors";
import BarraP3 from "../../Componentes/BarraP3";
import Publicacion1 from "./Publicacion1/Publicacion1";
import fotoPerfilPublicacion from "../../../assets/images/Sala/11.png";
import fotoPerfilPublicacion2 from "../../../assets/images/Sala/10.png";
import fotoPerfilPublicacion3 from "../../../assets/images/Sala/15.png";
import fotoPubliacacion from "../../../assets/images/Publicacion.png";
import fotoPubliacacion2 from "../../../assets/images/Sala/13.png";
import fotoPubliacacion3 from "../../../assets/images/Sala/14.png";
import Publicacion2 from "./Publicacion2/Publicacion2";
import Publicacion3 from "./Publicacion3/Publicacion3";
import Publicacion4 from "./Publicacion4/Publicacion4";
import Titulo3Puntos from "../../Componentes/Titulo3puntos";
import { Container, DescripcionView, PublicacionView, RecomendacionView, ScrollContainer, StyledImg, StyledText } from "./styles";

export default function GenteTop() {
  return (
    <ScrollContainer>
      <Container>
        <BarraP3 />
        <RecomendacionView>
          <StyledText
            size={20}
            weight={400}
            fs={"normal"}
            lh={24}
            color={Colors.black}
          >
            Pidele una recomendación a tu Comunidad Top
          </StyledText>
          <StyledImg
            width={40}
            height={40}
            source={require("../../../assets/images/LogoDato.png")}
          />
        </RecomendacionView>
        <DescripcionView>
          <Titulo3Puntos titulo={"Publicaciones recientes"} width={100} />
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.textoGris}
          >
            Aquí encontrarás toda la información y publicaciones sobre tu
            Comunidad Top. Pide o da recomendaciones!
          </StyledText>
        </DescripcionView>
        <PublicacionView>
          <Publicacion1
            fotoPerfil={fotoPerfilPublicacion}
            nombre={"María Paula Cadena  •  @mapaucadena • 2h"}
            descripcion={
              "Necesito una recomendación top para un profesor de guitarra a domicilio en Bogotá, Colombia."
            }
            imagen={fotoPubliacacion}
          />
          <Publicacion2
            fotoPerfil={fotoPerfilPublicacion3}
            nombre={"Armando Lopez • @arlopez21 • Hace 2h"}
            descripcion={
              "Necesito una recomendación top para un profesor de guitarra a domicilio en Bogotá, Colombia."
            }
            imagen={fotoPubliacacion}
          />
          <Publicacion3
            fotoPerfil={fotoPerfilPublicacion2}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Lorem ipsum dolor amet sim athem"}
            imagen={fotoPubliacacion}
          />
          <Publicacion4
            fotoPerfil={fotoPerfilPublicacion2}
            nombre={"Armando Lopez • @arlopez21 • 2h"}
            descripcion={"Lorem ipsum dolor amet sim athem"}
            imagen={fotoPubliacacion}
            fotoPerfil2={fotoPubliacacion2}
            fotoPerfil3={fotoPubliacacion3}
          />
        </PublicacionView>
      </Container>
    </ScrollContainer>
  );
}

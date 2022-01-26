import React from "react";
import CajaFicha from "../../../../Componentes/CajaFicha";
import { Container } from "./styles";

export default function Ficha() {
  return (
    <Container>
      <CajaFicha
              ancho={95}
              alto={80}
              fecha={"03/10/2022"}
              texto1={"Nombre completo"}
              texto2={"Morbi tincidunt metus quis justo lobortis tristique."}
              texto3={""}
      />
      <CajaFicha
             ancho={95}
             alto={74}
             fecha={"03/10/2022"}
             texto1={"Edad"}
             texto2={"28 años"}
             texto3={""}
      />
      <CajaFicha
              ancho={95}
              alto={76}
              fecha={"03/10/2022"}
              texto1={"Tipo de marca"}
              texto2={"Marca de cosmeticos venta en colombia"}
              texto3={""}
      />
      <CajaFicha
              ancho={95}
              alto={126}
              fecha={"03/10/2022"}
              texto1={"Tema de interés"}
              texto2={"Crear parilla de contenido para redes sociales \nIdentificar oportunidades de negocio nuevas \nMejorar el SEO de la página web"}
              texto3={""}
      />
    </Container>
  );
}

import React from "react";
import CajaFicha from "../../../../Componentes/CajaFicha";
import { Container } from "./styles";

export default function Recomendacion() {
  return (
    <Container>
      <CajaFicha
              ancho={95}
              alto={232}
              fecha={"03/10/2022"}
              texto1={"Titulo de la anotación"}
              texto2={"Loremsum matiatus lorem ipsum dolor sim lorem ipsum dolor amet"}
              texto3={"Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum"}
              icon={true}
      />
    </Container>
  );
}

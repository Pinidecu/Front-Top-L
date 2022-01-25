import React, { useState } from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import { AgendaView, Container, Titulo } from "./styles";
import Colors from "../../../constants/Colors";
import Calendario from "../../Componentes/Calendario";
import Agenda from "./Agenda/Agenda";

export default function AgendaAll() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Container>
      <BarraIconos
        tituloAB={"Mi agenda Live"}
        margin={"0px"}
        colorIcons={Colors.mainCOlorPurpleLigth}
        threePoints={true}
        add={true}
      />
      <Titulo>Junio</Titulo>
      <Calendario />
      <Titulo>Julio</Titulo>
      <Calendario />
      <AgendaView>
        <Agenda
          titulo="Yoga para ti, para mí y para todos! 9:00AM - 4:00 PM"
          mes="JUN"
          dia="15"
        />
      </AgendaView>
    </Container>
  );
}

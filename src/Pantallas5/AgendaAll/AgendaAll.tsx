import React, { useState } from "react";
import BarraIconos from "../../Componentes/BarraIconos";
import { Container, Titulo } from "./styles";
import Colors from "../../../constants/Colors";
import DatePicker from "react-datepicker";
import CalendarPicker from "react-native-calendar-picker";
import Calendario from "../../Componentes/Calendario";


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
    </Container>
  );
}

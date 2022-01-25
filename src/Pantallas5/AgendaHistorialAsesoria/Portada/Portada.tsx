import React from "react";
import { BusquedaView, ImgView, StyledImg, StyledText } from "./styles";
import Colors from "../../../../constants/Colors";



export default function Portada() {
  return (
    <BusquedaView>
      <ImgView>
        <StyledImg
          width={100}
          height={100}
          source={require("../../../../assets/images/historial.png")}
        />
      </ImgView>
      <StyledText
        size={12}
        weight={400}
        fs={"normal"}
        lh={14}
        color={Colors.SecondaryGray}
      >
        En tu historial encuentras todos los datos almacenados sobre tus
        asesorías, eventos y publicaciones donde has participado.
      </StyledText>
    </BusquedaView>
  );
}

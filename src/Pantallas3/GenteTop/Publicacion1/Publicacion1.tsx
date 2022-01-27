import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";
import Boton from "../../../Componentes/Boton";
import { Container, Funciones, Info, MegustaView, NombreView, StyledImg, StyledImgPerfil, StyledText, TagsView, Titulo, TituloView } from "./styles";

interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function Publicacion1({
  fotoPerfil,
  nombre,
  descripcion,
  imagen
}: Props) {
  return (
    <Container>
      <TituloView>
        <StyledText
          size={14}
          weight={700}
          fs={"normal"}
          lh={18}
          color={Colors.black}
        >
          Tu contacto
          <StyledText
            size={14}
            weight={700}
            fs={"normal"}
            lh={18}
            color={Colors.mainCOlorPurpleLigth}
          >
            {" mapaucadena "}
          </StyledText>
          está buscando una recomendación top
        </StyledText>
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={25} />
      </TituloView>
      <Info>
        <StyledImgPerfil
          width={45}
          height={45}
          radio={"50%"}
          margin={"0"}
          source={{
            uri: fotoPerfil,
          }}
        />
        <Titulo>
          <NombreView>
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={14}
              color={Colors.mainColorBlack}
            >
              {nombre}
            </StyledText>
            <StyledImg
              width={10}
              height={10}
              radio={""}
              margin={"0px"}
              source={require("../../../../assets/images/candado.png")}
            />
          </NombreView>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            {descripcion}
          </StyledText>
          <TagsView>
            <StyledText
              size={12}
              weight={700}
              fs={"normal"}
              lh={14}
              color={Colors.mainCOlorPurpleDark}
            >
              Música • Clases guitarra
            </StyledText>
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={14}
              color={Colors.SecondaryGray}
            >
              #clasesparticulares #Chapinero #maestromusica
            </StyledText>
          </TagsView>
          <MegustaView>
            <Funciones>
              <Icon
                name="favorite-border"
                color={Colors.SecondaryGray}
                size={18}
              />
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                (128)
              </StyledText>
            </Funciones>
            <Funciones>
              <StyledImg
                width={10}
                height={10}
                radio={""}
                margin={"0px"}
                source={require("../../../../assets/images/comentario.png")}
              />{" "}
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                Comentarios
              </StyledText>
            </Funciones>
            <Funciones>
              <StyledImg
                width={10}
                height={10}
                radio={""}
                margin={"0px"}
                source={require("../../../../assets/images/send.png")}
              />
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                Compartir
              </StyledText>
            </Funciones>
          </MegustaView>
          <Boton ancho={100} alto={40} texto="RECOMENDAR" icon={""} />
        </Titulo>
      </Info>
    </Container>
  );
}

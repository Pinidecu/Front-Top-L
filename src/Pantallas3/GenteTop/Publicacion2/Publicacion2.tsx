import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";
import PublicacionSinImg from "../../../Componentes/PublicacionSinImg";
import fotoPerfilPublicacion from "../../../../assets/images/Sala/12.png";
import { Container, Funciones, Info, MasView, MegustaView, NombreView, StyledImg, StyledImgPerfil, StyledText, Titulo, TituloView } from "./styles";

interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function Publicacion2({
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
            {" arlopez21 "}
          </StyledText>
          ha añadido una nueva recomendación top
        </StyledText>
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={25} />
      </TituloView>
      <Info>
        <MasView>
          <Icon
            name="add"
            color={Colors.mainCOlorPurpleLigth}
            size={15}
          />
        </MasView>
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
          </NombreView>
          <PublicacionSinImg
            fotoPerfil={fotoPerfilPublicacion}
            titulo={"Aeroyoga Barranquilla"}
            nombre={"Marina Lopez"}
            descripcion={"Instructor de Yoga"}
            puntuacion={"4.8"}
            reviews={"(128 reviews) "}
          />
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
                source={require("../../../assets/images/comentario.png")}
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
                source={require("../../../assets/images/send.png")}
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
        </Titulo>
      </Info>
    </Container>
  );
}

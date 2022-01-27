import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";
import { ComentarioView, Container, DescripcionView, Funciones, Info, Linea, MasView, MegustaView, Publicaciones, StyledImg, StyledImgIcons, StyledImgPerfil, StyledText, Titulo, TituloView } from "./styles";

interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  fotoPerfil2: string;
  fotoPerfil3: string;
}

export default function Publicacion4({
  fotoPerfil,
  nombre,
  descripcion,
  imagen,
  fotoPerfil2,
  fotoPerfil3,
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
          arlopez21 comentó en la sala que sigues.
        </StyledText>
      </TituloView>
      <Publicaciones>
        <Linea />
        <Info>
          <MasView>
            <Icon name="add" color={Colors.mainCOlorPurpleLigth} size={15} />
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
            <StyledText
              size={12}
              weight={400}
              fs={"normal"}
              lh={14}
              color={Colors.mainColorBlack}
            >
              {nombre}
            </StyledText>
            <DescripcionView>
              <StyledText
                size={14}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.black}
              >
                {descripcion}
              </StyledText>
              <Icon
                name="more-horiz"
                color={Colors.mainCOlorPurpleLigth}
                size={25}
              />
            </DescripcionView>
            <StyledImg
              width={90}
              height={158.87}
              radio={""}
              margin={"0px"}
              source={{
                uri: imagen,
              }}
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
                <StyledImgIcons
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
                <StyledImgIcons
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
          </Titulo>
        </Info>
        <ComentarioView>
          <StyledImgPerfil
            width={35}
            height={35}
            radio={"50%"}
            margin={"0"}
            source={{
              uri: fotoPerfil2,
            }}
          />
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            Group name lorem ipsum dolor amet sim athem
          </StyledText>
        </ComentarioView>
        <ComentarioView>
          <StyledImgPerfil
            width={35}
            height={35}
            radio={"50%"}
            margin={"0"}
            source={{
              uri: fotoPerfil3,
            }}
          />
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.bordeDestacado}
          >
            Escribe tu respuesta...
          </StyledText>
        </ComentarioView>
      </Publicaciones>
    </Container>
  );
}

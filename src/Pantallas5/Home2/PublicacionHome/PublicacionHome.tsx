import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";
import {
  Container,
  Info,
  MegustaView,
  Titulo,
  StyledBookmark,
  StyledImg,
  StyledImgPerfil,
  StyledText,
  LeftContainer,
} from "./styles";


interface Props {
  fotoPerfil: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export default function PublicacionHome({
  fotoPerfil,
  nombre,
  descripcion,
  imagen,
}: Props) {
  return (
    <Container>
      <StyledBookmark
        width={15}
        height={18}
        source={require("../../../../assets/images/bookmark.png")}
      />
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
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </StyledText>
          <StyledText
            size={14}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.black}
          >
            {descripcion}
          </StyledText>
          <MegustaView>
            <LeftContainer>
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
              <StyledImg
                width={15}
                height={15}
                source={require("../../../../assets/images/comentario.png")}
              />
              <StyledText
                size={12}
                weight={400}
                fs={"normal"}
                lh={18}
                color={Colors.SecondaryGray}
              >
                Responder
              </StyledText>
            </LeftContainer>
            <StyledImg
              width={15}
              height={15}
              source={require("../../../../assets/images/send.png")}
            />
          </MegustaView>
        </Titulo>
      </Info>
    </Container>
  );
}

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
  Text,
} from "./styles";

interface Props {
  tags: string;
  nombre: string;
  fecha: string;
  imagen: string;
}

export default function CardHome({ tags, nombre, fecha, imagen }: Props) {
  return (
    <Container>
      <StyledBookmark
        width={15}
        height={18}
        source={require("../../../../assets/images/bookmark.png")}
      />
      <Info>
        <Titulo>
          <Text
            size={14}
            weight={400}
            fs={"italic"}
            lh={18}
            color={Colors.mainColorBlack}
          >
            {nombre}
          </Text>
          <Text
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.black}
          >
            {fecha}
          </Text>
          <Text
            size={12}
            weight={400}
            fs={"normal"}
            lh={14}
            color={Colors.mainCOlorPurpleLigth}
          >
            {tags}
          </Text>
        </Titulo>
        <StyledImgPerfil
          width={45}
          height={45}
          radio={"50%"}
          margin={"0"}
          source={{
            uri: imagen,
          }}
        />
      </Info>
      <MegustaView>
        <LeftContainer>
          <Icon name="favorite-border" color={Colors.SecondaryGray} size={18} />
          <StyledText
            size={12}
            weight={400}
            fs={"normal"}
            lh={18}
            color={Colors.SecondaryGray}
          >
            (128)
          </StyledText>
        </LeftContainer>
        <StyledImg
          width={15}
          height={15}
          source={require("../../../../assets/images/send.png")}
        />
      </MegustaView>
    </Container>
  );
}

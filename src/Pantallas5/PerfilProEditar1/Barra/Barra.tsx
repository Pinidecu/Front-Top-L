import React from "react";
import { Text, View, Image } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";
import { Container, RigthContainer, StyledImgIcon } from "./styles";

export default function Barra() {
  return (
    <Container>
      <Icon name="chevron-left" color={Colors.mainCOlorPurpleLigth} size={30} />
      <RigthContainer>
        <StyledImgIcon
          width={23}
          height={23}
          source={require("../../../../assets/images/Edit.png")}
        />
        <Icon name="more-horiz" color={Colors.mainCOlorPurpleLigth} size={30} />
      </RigthContainer>
    </Container>
  );
}

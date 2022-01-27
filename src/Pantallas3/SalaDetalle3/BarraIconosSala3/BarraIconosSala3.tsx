import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";
import { Campana, Container, LeftContainer, LiveUsersView, Punto, RigthContainer, StyledImg, StyledText } from "./styles";

interface Props {
  titulo: string;
  margin: string;
  colorIcons: string;
  colorText?: string;
  add?: boolean;
  threePoints?: boolean;
  lupa?: boolean;
  lupaBlue?: boolean;
  campana?: boolean;
  right?: boolean;
  closeBlack?: boolean;
}

export default function BarraIconosSala3({
  titulo,
  margin,
  colorIcons,
  colorText,
  threePoints,
  lupa,
  lupaBlue,
  add,
  closeBlack,
  campana,
  right,
}: Props) {
  return (
    <Container margin={margin}>
      <LeftContainer>
        <Icon name="chevron-left" color={colorIcons} size={25} />
        <LiveUsersView>
          <StyledImg
            width={15}
            height={15}
            source={require("../../../../assets/images/ojo.png")}
          />
          <StyledText
            color={colorText ? colorText : Colors.mainCOlorPurpleLigth}
          >
            {titulo}
          </StyledText>
        </LiveUsersView>
      </LeftContainer>
      <RigthContainer>
        {lupa ? <Icon name="search" color={Colors.black} size={25} /> : null}
        {add ? <Icon name="add" color={colorIcons} size={25} /> : null}
        {lupaBlue ? <Icon name="search" color={colorIcons} size={25} /> : null}
        {threePoints ? (
          <Icon name="more-horiz" color={colorIcons} size={25} />
        ) : null}
        {campana ? (
          <Campana>
            <Punto color={Colors.mainColorRed}></Punto>
            <StyledImg
              width={20}
              height={20}
              source={require("../../../../assets/images/campana.png")}
            />
          </Campana>
        ) : null}
        {right ? (
          <Icon name="chevron-right" color={colorIcons} size={25} />
        ) : null}
        {closeBlack ? (
          <Icon name="close" color={Colors.black} size={25} />
        ) : null}
      </RigthContainer>
    </Container>
  );
}

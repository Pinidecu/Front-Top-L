import React from "react";
import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

const Container = styled.View`
  align-items: center;
  margin: 5px;
`;

interface ContainerImgProps {
  activo: boolean;
  foto: string;
}

const ContainerImg = styled.View<ContainerImgProps>`
  background-image: url(${({ foto }) => foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25vw;
  height: 25vw;
  border-radius: 24px;
  ${({ activo }) =>
    activo &&
    `
    border: 3px solid ${Colors.mainCOlorPurpleLigth};
  `}
  z-index: 1;
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${Colors.SecondaryGray};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 700;
  line-height: 14;
  margin: 5px;
`;
interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}
const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;
const MuteView = styled.View`
  position: absolute;
  bottom: 7vw;
  right: 1vw;
  z-index: 10;
`;
interface Props {
  nombre: string;
  activo: boolean;
  foto: string;
  mute: boolean;
}

export default function ParticipanteSala3({
  nombre,
  activo,
  foto,
  mute,
}: Props) {
  console.log(foto);
  return (
    <Container>
      {mute ? (
        <MuteView>
          <StyledImg
            width={35}
            height={35}
            radio={"50%"}
            source={require("../../../assets/images/mute.png")}
          />
        </MuteView>
      ) : null}
      <ContainerImg activo={activo} foto={foto} />
      <StyledText>{nombre}</StyledText>
    </Container>
  );
}

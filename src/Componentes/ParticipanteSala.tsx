import React from "react";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";


const Container = styled.View`
  align-items: center;
`;

interface ContainerImgProps {
  activo: boolean;
  foto:string;
}

const ContainerImg = styled.View<ContainerImgProps>`
  background-image: url(${({foto})=>foto});
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

interface Props {
  nombre: string;
  activo: boolean;
  foto:string;
}

export default function ParticipanteSala({ nombre, activo, foto }: Props) {
  console.log(foto);
  return (
    <Container>
      <ContainerImg activo={activo} foto={foto} />
      <StyledText>{nombre}</StyledText>
    </Container>
  );
}

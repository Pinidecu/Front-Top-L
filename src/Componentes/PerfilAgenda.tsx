import React from "react";
import { Text, View, Image, addons } from "react-native";
import { Icon } from "react-native-elements";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";

interface Props {
  categoria: string;
  fecha: string;
  hora: string;
  tiempo: string;
}

interface datosPerfilAgenda {
  nombre: string;
  usuario: string;
  foto: string;
}

interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}

interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;
const TopContainer = styled.View`
  align-items: center;
`;

const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Mas = styled.View`
  width: 16px;
  height: 16px;
  margin: 0px;
  background-color: ${Colors.SecondaryPurpleLight};
  border-radius: 50%;
  position: absolute;
  bottom: -4px;
  left: 12px;
`;
const Info = styled.View`
  justify-content: center;
`;

const UsersContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
`;

const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;

export default function PerfilAgenda({ categoria, fecha, hora, tiempo }: Props) {
  const datos: datosPerfilAgenda = {
    nombre: "Antony Ruiz",
    usuario: "@anruizp",
    foto: "../../assets/images/Sala/9.png",
  };

  return (
    <Container>
      <TopContainer>
        <StyledImg
          width={40}
          height={40}
          radio={"50%"}
          source={{
            uri: `${datos.foto}`,
          }}
        />
        <RightContainer>
          <StyledText
            size={16}
            weight={700}
            fs={"normal"}
            lh={24}
            color={Colors.mainColorBlack}
          >
            {datos.nombre}
          </StyledText>
          <StyledText
            size={12}
            weight={700}
            fs={"normal"}
            lh={14}
            color={Colors.SecondaryGray}
          >
            {datos.usuario}
          </StyledText>
        </RightContainer>
      </TopContainer>
        <Info>
          
          <UsersContainer>
            <Icon
              type="ionicon"
              name="eye-outline"
              color={Colors.mainCOlorPurpleDark}
              size={20}
            />
            <StyledText
              size={14}
              weight={400}
              fs={"normal"}
              lh={16.8}
              color={Colors.mainCOlorPurpleDark}
            >
              {datos.usuarios}
            </StyledText>
          </UsersContainer>
        </Info>
      <StyledImg
        width={40}
        height={40}
        radio={"50%"}
        source={require("../../assets/images/AddCall.png")}
      />
    </Container>
  );
}

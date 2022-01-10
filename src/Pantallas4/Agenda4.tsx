import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import BarraP3 from "../Componentes/BarraP3";

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.white};
`
export const CenterContainer = styled.View`
  flex-direction: row;
  align-self: center;
`
export const ContainerItem = styled.View`
  border-width: 1; 
  border-color: ${Colors.SecondaryPurpleLight};
  border-radius: 10; 
  padding-left: 20; 
  padding-right: 15; 
  padding-bottom: 5; 
  padding-top: 10;
`
export const Heading = styled.Text`
  color: ${Colors.colorHeading};
  font-size: 14;
  font-weight: bold;
`
export const Title = styled.Text`
  font-weight: bold;
  font-size: 12;
  color: ${Colors.colorBoton};
`
export const DateText = styled.Text`
  font-size: 13;
  font-weight: bold;
  color: ${Colors.mainColorBlack};
`
export default function Agenda4() {
  return (
    <Container>
        {/* Header Begin */}
        <AppHeader title='Agendar asesoría' color='#fff' />
        {/* Header End */}

        {/* Container */}
        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <ContainerItem>
                <View>
                    <Title>Fecha y hora de la asesoría:</Title>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                    <CenterContainer>
                        <DateText> 15 April 2022 </DateText>
                    </CenterContainer>
                    <CenterContainer>
                        <CenterContainer>
                            <DateText>9:00 am - 10:00pm</DateText> {/*Padding5*/}
                        </CenterContainer>
                        <View style={{ alignSelf: 'center' }}>
                            <Icon name="chevron-up" color="#5B74FB" size={15} />
                            <Icon name="chevron-down" color="#5B74FB" size={15} />
                        </View>
                    </CenterContainer>

                </View>
            </ContainerItem>
            <Text style={{ fontSize: 12, color: '#7E8FB9', paddingTop: 10 }}>Selecciona una fecha para agendar tu asesoría</Text>
        </View>

        {/* Button */}
        <View style={{
            flex: 1,
            justifyContent: 'flex-end',
        }}>
            <AppButton onPress={() => { }} title="AGENDAR ASESORÍA" style={{
                marginTop: 15,
                backgroundColor: "#4E31EB",
                borderColor: '#4E31EB',
            }} textStyle={{ color: '#fff' }} />
        </View>
    </Container>
);
};

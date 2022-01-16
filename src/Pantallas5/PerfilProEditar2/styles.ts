import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`  
  background-color: ${Colors.white};
  flex:1;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  line-height: 18px;
  color: ${Colors.mainColorBlack};
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;


export const Texto = styled.Text`
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16.8px;
  color: ${Colors.mainColorBlack};
  width: 90%;
  align-self: center;
  margin-top: 10px;
`;
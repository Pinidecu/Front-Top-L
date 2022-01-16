import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`  
  background-color: ${Colors.white};
  flex:1;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
  color: ${Colors.SecondaryGray};
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;


export const TextSubrayado = styled.Text`
  font-family: Proxima Nova;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  width: 80%;
  align-self: center;
  margin-top: 10px;
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
`;
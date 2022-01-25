import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.white};
  width: 100%;
  box-shadow: 0px 0px 4px rgba(180, 188, 206, 0.5);
  border-radius: 4px;
  height:40px;
  justify-content:center;
  margin: 10px 0px;
`;

export const Titulo = styled.Text`
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 16.8px;
  color: ${Colors.mainColorBlack};
  margin-left: 10px;
`;
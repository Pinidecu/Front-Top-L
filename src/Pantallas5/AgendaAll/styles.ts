import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.white};
  flex: 1;
`;

export const AgendaView = styled.View`
  width: 90%;
  align-self:center;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 21.28px;
  color: ${Colors.SecondaryGray};
  width: 90%;
  align-self: center;
  margin-top: 20px;
  text-align: center;
`;

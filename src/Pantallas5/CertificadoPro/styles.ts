import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.SecondaryOthergray};
  flex: 1;
`;

export const JCView = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-self:center;
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
  color: ${Colors.SecondaryGray};
  align-self: center;
`;

export const TextSubrayado = styled.Text`
  font-family: Proxima Nova;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  align-self: center;
  margin-top: 10px;
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
`;

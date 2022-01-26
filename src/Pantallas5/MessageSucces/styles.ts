import styled from "styled-components/native";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
  background-color: ${Colors.white};
  flex: 1;
  justify-content: space-between;
`;

export const BotonesView = styled.View`
  width: 90%;
  align-self: center;
`;
export const IconView = styled.View`
  width: 90%;
  align-self: center;
`;

export const ContainerPrincipal = styled.View`
  width: 90%;
  height: 80%;
  align-self: center ;
  justify-content: space-evenly;
  margin-bottom:50px;
`;
export const Texto = styled.Text`
  font-family: ABeeZee;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
  color: ${Colors.mainColorBlack};
  width: 90%;
  align-self: center;
  margin-top: 20px;
  text-align: center;
`;

interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-self:center;
`;
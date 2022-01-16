import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

export const Container = styled.View`
  width: 100%;
  align-self: center;
  background-color: ${Colors.destacado};
  align-items: center;
  padding: 15px;
`;
interface StyledImgProps {
  width: number;
  height: number;
  radio?: any;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Titulo = styled.Text`
  font-family: ABeeZee;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  line-height: 24px;
  color: ${Colors.SecondaryGray};
`;

import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";



interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin:3px;
`;

export const RigthContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  margin: 15px;
`;

import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

export const Container = styled.View`
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  width: 100%;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
`;


export const Titulo = styled.Text`
  font-family: Proxima Nova;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 14px;
  color: ${Colors.mainColorBlack};
  margin-left: 10px;
`;
export const Subrayado = styled.Text`
  font-family: Proxima Nova;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 29px;
  color: ${Colors.mainCOlorPurpleLigth};
  text-decoration: underline ${Colors.mainCOlorPurpleLigth};
`;

interface StyledImgProps {
  width: number;
  height: number;
}
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
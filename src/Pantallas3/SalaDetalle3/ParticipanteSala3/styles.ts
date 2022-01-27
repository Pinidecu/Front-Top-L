import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";

interface StyledImgProps {
  width: number;
  height: number;
  radio: string;
}

interface ContainerImgProps {
  activo: boolean;
  foto: string;
}

export const Container = styled.View`
  align-items: center;
  margin: 5px;
`;

export const ContainerImg = styled.View<ContainerImgProps>`
  background-image: url(${({ foto }) => foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25vw;
  height: 25vw;
  border-radius: 24px;
  ${({ activo }) =>
    activo &&
    `
    border: 3px solid ${Colors.mainCOlorPurpleLigth};
  `}
  z-index: 1;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${Colors.SecondaryGray};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 700;
  line-height: 14;
  margin: 5px;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio};
`;

export const MuteView = styled.View`
  position: absolute;
  bottom: 7vw;
  right: 1vw;
  z-index: 10;
`;
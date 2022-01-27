import styled from "styled-components/native";

interface StyledContainerProps {
  margin: string;
}

interface StyledTextProps {
  color: string;
}

interface StyledImgProps {
  width: number;
  height: number;
}

interface PuntoProps {
  color: string;
}

export const Container = styled.View<StyledContainerProps>`
  flex-direction: row;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: ${(props) => props.margin};
  justify-content: space-between;
  align-items: center;
`;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-style: normal;
  font-size: 14;
  font-weight: 700;
  line-height: 18;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: space-between;
  column-gap: 15px;
`;

export const LiveUsersView = styled.View`
  flex-direction: row;
  align-items: space-between;
  align-items: center;
  column-gap:5px;
`;

export const RigthContainer = styled.View`
  flex-direction: row
  align-items: center;
`;

export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const Campana = styled.View`
  margin-bottom: 5px;
`;

export const Punto = styled.View<PuntoProps>`
  background-color: ${(props) => props.color};
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  left: 10px;
  top: 5px;
  z-index: 1;
`;

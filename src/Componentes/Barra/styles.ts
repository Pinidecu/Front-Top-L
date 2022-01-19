import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const RigthContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface StyledImgIconProps {
  width: number;
  height: number;
}

export const StyledImgIcon = styled.Image<StyledImgIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: 5px;
`;

import styled from 'styled-components/native';

interface ContainerProps {
  foto: string;
}

export const Container = styled.View<ContainerProps>`
  background-image: url(${(props) => props.foto});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 30vh;
`;

interface StyledImgProps {
  width: number;
  height: number;
  radio: any;
  margin: string;
  left: number;
}
export const StyledBookmark = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  bottom: -26px;
  right: 20px;
`;
interface StyledTextProps {
  size: number;
  weight: number;
  fs: string;
  lh: number;
  color: string;
  margin: number;
}

interface StyledImgIconProps {
  width: number;
  height: number;
}

export const TextView = styled.View`
  justify-content: center;
  width: 90%;
  align-self: center;
  margin: 5px;
`;

export const NotiView = styled.View`
flex-direction: row;
column-gap: 10px;
  align-items: center;
  justify-content: space-space-between;
  align-self: center;
  margin: 10px 0px;
`;

export const StyledText = styled.Text<StyledTextProps>`
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-style: ${(props) => props.fs};
  line-height: ${(props) => props.lh};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin}px 0px;
`;

export const StyledImgIcon = styled.Image<StyledImgIconProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

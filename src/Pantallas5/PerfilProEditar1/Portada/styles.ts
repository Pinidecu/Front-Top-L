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
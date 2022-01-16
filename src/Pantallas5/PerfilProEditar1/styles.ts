import styled from 'styled-components/native';

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

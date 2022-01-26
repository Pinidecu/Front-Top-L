import styled from "styled-components/native";

interface StyledTextProps {
  size: number;
  weight: number;
  lh: number;
  color: string;
}

interface StyledImgProps {
  width: number;
  height: number;
  radio: number;
}

export const Container = styled.View`
  width: 100%;
`;

export const TopContainer = styled.View`
  margin-left: 27px;
  justify-content: flex-start;
  align-content: left;  
  flex-direction: row;
  column-gap: 8px;
`;

export const NameContainer = styled.View`
  align-items: left;
  margin-bottom: 15px;
`;

export const TextoCont = styled.View`
  flex-direction: row;
  margin-left: 75px;
  justify-items: left;
  padding: 2px;
`

export const StyledText = styled.Text<StyledTextProps>`  
  color: ${(props) => props.color};
  font-family: Proxima Nova;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lh};
  text-align: left;
`
export const StyledImg = styled.Image<StyledImgProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radio}%;
`;
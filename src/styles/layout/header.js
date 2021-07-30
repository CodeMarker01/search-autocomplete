import styled from "styled-components";
import { Bg } from "../helpers/mixins";

export const BackgroundHeader = styled.div`
  ${Bg}
`;

export const BackgroundHeader2 = styled.div`
  ${Bg({ color: "cyan" })}
`;

export const BackgroundHeader3 = styled.div`
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : "lightgoldenrodyellow"};
  color: ${(props) => (props.color ? props.color : "lightgoldenrodyellow")};
`;

//* khong dung duoc
export const BackgroundHeader4 = styled.div`
  ${Bg((color) => (color ? color : "lightgoldenrodyellow"))}/* ${Bg({
    color: "cyan",
  })} */
`;

export const Background2 = styled.div`
  background-color: ${(props) => props.theme.color};
`;

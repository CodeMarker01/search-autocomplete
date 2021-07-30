import { css } from "styled-components";

export const Size = ({ height, width }) => css`
  height: ${height || "100%"};
  width: ${width || height};
`;

export const Bg = ({ color }) => css`
  background-color: ${color || "red"};
`;

export const Bg2 = ({ color }) => css`
  background-color: ${color || "red"};
`;

export const flexbox = ({
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
}) => css`
  display: flex;
  align-items: ${alignItems || "center"};
  justify-content: ${justifyContent || "center"};
  flex-direction: ${flexDirection || "row"};
  flex-wrap: ${flexWrap || "nowrap"};
`;

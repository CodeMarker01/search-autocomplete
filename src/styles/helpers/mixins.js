import { css } from "styled-components";

export const Size = ({ height, width = height }) => css`
  height: ${height || "100%"};
  width: ${width};
`;

export const Bg = ({ color }) => css`
  background-color: ${color || "red"};
`;

export const Bg2 = ({ color }) => css`
  background-color: ${color || "red"};
`;

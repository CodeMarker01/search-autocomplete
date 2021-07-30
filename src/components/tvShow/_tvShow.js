import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";

export const TvShowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6em;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  transition: background-color 0.4s ease-in-out;
  /* width: 100%; */
  &:hover {
    background-color: #ffe0e4;
  }
`;
export const Thumbnail = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex: 0.4;

  img {
    width: auto;
    height: 100%;
  }
`;
export const Rating = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;
export const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

import { motion } from "framer-motion";
import styled from "styled-components";
import { flexbox } from "../../styles/helpers/mixins";
export const SearchBarContainer = styled(motion.div)`
  /* ${flexbox({
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  })} */
  display: flex;
  flex-direction: column;
  width: 34em;
  height: 3.8em;
  /* height: ${(props) => (props.height ? props.height : "3em")}; */
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 0, 0, 0.14);
`;
export const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;
export const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
  margin-left: 20px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #12112e;
  font-weight: 500;
  border-radius: 6px;
  background-color: transparent;
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
  &::placeholder {
    color: #bebebe;
    transition: all 250ms ease-in-out;
  }
`;
export const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 23px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    color: #dfdfdf;
  }
`;

export const LineSeperator = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;
export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  ${flexbox}
`;

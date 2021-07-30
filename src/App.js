import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import {
  Background2,
  BackgroundHeader,
  BackgroundHeader2,
  BackgroundHeader3,
  BackgroundHeader4,
} from "./styles/layout/header";
import { ThemeProvider } from "styled-components";
import { theme, theme2 } from "./styles/helpers/theme";
import SearchBar from "./components/searchBar";
import { AppContainer } from "./styles/layout/_mainpage";

function App() {
  return (
    <AppContainer>
      <SearchBar />
    </AppContainer>
  );
}

export default App;

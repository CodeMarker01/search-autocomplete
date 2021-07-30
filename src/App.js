import logo from "./logo.svg";
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

function App() {
  return (
    // <ThemeProvider theme={theme2}>
    <BackgroundHeader3 color="lightcoral" bgcolor="cyan" className="App">
      anh em ta
    </BackgroundHeader3>
    // </ThemeProvider>
  );
}

export default App;

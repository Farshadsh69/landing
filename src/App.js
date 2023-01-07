import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Index from "./screens";
import { getDirection } from "./localization";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function App() {
  return getDirection()==='ltr'?(
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <Index />
      </StylesProvider>
    </ThemeProvider>
  ):
  (
    <ThemeProvider theme={theme}>
    <StylesProvider jss={jss}>
      <CssBaseline />
      <Index />
    </StylesProvider>
  </ThemeProvider>
  )
}

export default App;

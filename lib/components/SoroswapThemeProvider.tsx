import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../themes";
import { CssBaseline, PaletteMode } from "@mui/material";
import { Global, css } from "@emotion/react";

const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css?family=Inter:300,400,500,700");
  @import url("https://fonts.googleapis.com/css?family=Darker+Grotesque:300,400,500,700");
`;

interface Props {
  children: React.ReactNode;
  theme: PaletteMode;
}

export function SoroswapThemeProvider(props: Props) {
  return (
    <ThemeProvider theme={theme(props.theme)}>
      <CssBaseline />
      <Global styles={GlobalStyle} />

      {props.children}
    </ThemeProvider>
  );
}
import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, SoroswapThemeProvider } from "../lib";
import { Container } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SoroswapThemeProvider theme="dark">
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Navbar />
      </Container>
    </SoroswapThemeProvider>
  </React.StrictMode>
);

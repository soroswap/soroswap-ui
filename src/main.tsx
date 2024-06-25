import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, SoroswapThemeProvider } from "../lib";
import { Container } from "@mui/material";

const navItems = [
  {
    href: "https://app.soroswap.finance/balance",
    label: "Balance",
    target: "_blank",
  },
  {
    href: "https://app.soroswap.finance/swap",
    label: "Swap",
    target: "_blank",
  },
  {
    href: "https://app.soroswap.finance/liquidity",
    label: "Liquidity",
    target: "_blank",
  },
  {
    href: "https://app.soroswap.finance/bridge",
    label: "Bridge",
    target: "_blank",
  },
  {
    href: "/",
    label: "Info",
    target: "_self",
    active: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SoroswapThemeProvider theme="dark">
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Navbar navItems={navItems} />
      </Container>
    </SoroswapThemeProvider>
  </React.StrictMode>
);

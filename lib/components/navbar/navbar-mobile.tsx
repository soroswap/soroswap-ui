import { useState } from "react";
import NavbarMenu from "./navbar-menu";
import { Drawer, useTheme } from "@mui/material";

export interface NavBarMobileProps {
  menuWidth?: number;
  menuHeight?: number;
  drawerMarginTop?: number;
  children: (setDrawerOpen: (open: boolean) => void) => React.ReactNode;
}

const NavBarMobile = ({
  menuWidth = 30,
  menuHeight = 30,
  drawerMarginTop = 78,
  children,
}: NavBarMobileProps) => {
  const theme = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <NavbarMenu
        width={menuWidth}
        height={menuHeight}
        onClick={toggleDrawer}
      />

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        disableScrollLock
        sx={{
          "&.MuiDrawer-root": { zIndex: "1050" },
          "&.MuiDrawer-root .MuiDrawer-paper": {
            marginTop: `${drawerMarginTop}px`,
            bgcolor: theme.palette.background.default,
            backgroundImage: "none",
          },
        }}
      >
        {children(setDrawerOpen)}
      </Drawer>
    </>
  );
};

export default NavBarMobile;

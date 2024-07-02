import { Box } from "@mui/material";
import { DEFAULT_NAV_ITEMS, NavItem } from "./items";
import NavbarItems from "./navbar-items";
import NavBarMobile from "./navbar-mobile";
import NavBarDesktop from "./navbar-desktop";

interface NavBarMobileProps {
  menuWidth?: number;
  menuHeight?: number;
  drawerMarginTop?: number;
  extraContent?: React.ReactNode;
}

export interface NavbarProps {
  navItems?: NavItem[];
  height?: number;
  onClickItem?: (item: NavItem) => void;
  isActiveItem?: (item: NavItem) => boolean;
  isMobile?: boolean;
  mobileProps?: NavBarMobileProps;
  size?: "md" | "lg";
}

const heights = {
  md: 40,
  lg: 50,
};

const fontSizes = {
  md: 16,
  lg: 20,
};

export const Navbar = ({
  navItems = DEFAULT_NAV_ITEMS,
  onClickItem,
  isActiveItem,
  size = "md",
  isMobile = false,
  mobileProps = { menuWidth: 30, menuHeight: 30, drawerMarginTop: 78 },
}: NavbarProps) => {
  if (isMobile) {
    return (
      <NavBarMobile {...mobileProps}>
        {(setDrawerOpen) => (
          <Box display="flex" flexDirection="column" gap={1} py={1}>
            <NavbarItems
              navItems={navItems}
              onClickItem={(item) => {
                onClickItem?.(item);
                setDrawerOpen(false);
              }}
              isActiveItem={isActiveItem}
              isMobile={isMobile}
              fontSize={fontSizes[size]}
            />
            {mobileProps?.extraContent}
          </Box>
        )}
      </NavBarMobile>
    );
  }

  return (
    <NavBarDesktop height={heights[size]}>
      <NavbarItems
        navItems={navItems}
        onClickItem={onClickItem}
        isActiveItem={isActiveItem}
        isMobile={isMobile}
        fontSize={fontSizes[size]}
      />
    </NavBarDesktop>
  );
};

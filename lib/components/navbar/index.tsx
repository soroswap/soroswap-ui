import { Box } from "@mui/material";
import { DEFAULT_NAV_ITEMS, NavItem } from "./items";
import NavbarItems from "./navbar-items";
import NavBarMobile, { NavBarMobileProps } from "./navbar-mobile";
import NavBarDesktop from "./navbar-desktop";

export interface NavbarProps {
  navItems?: NavItem[];
  height?: number;
  onClickItem?: (item: NavItem) => void;
  isActiveItem?: (item: NavItem) => boolean;
  isMobile?: boolean;
  mobileProps?: NavBarMobileProps;
}

export const Navbar = ({
  navItems = DEFAULT_NAV_ITEMS,
  onClickItem,
  isActiveItem,
  height = 40,
  isMobile = false,
  mobileProps = { menuWidth: 30, menuHeight: 30, drawerMarginTop: 78 },
}: NavbarProps) => {
  if (isMobile) {
    return (
      <NavBarMobile {...mobileProps}>
        <Box display="flex" flexDirection="column" gap={1} py={1}>
          <NavbarItems
            navItems={navItems}
            onClickItem={onClickItem}
            isActiveItem={isActiveItem}
            isMobile={isMobile}
          />
        </Box>
      </NavBarMobile>
    );
  }

  return (
    <NavBarDesktop height={height}>
      <NavbarItems
        navItems={navItems}
        onClickItem={onClickItem}
        isActiveItem={isActiveItem}
        isMobile={isMobile}
      />
    </NavBarDesktop>
  );
};

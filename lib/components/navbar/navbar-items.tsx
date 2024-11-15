import { Link, styled } from "@mui/material";
import { DEFAULT_NAV_ITEMS, NavItem } from "./items";

const NavLinkItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "isMobile",
})<{ active?: boolean; isMobile?: boolean; fontSize?: number }>`
  display: flex;
  padding: 4px 20px;
  align-items: center;
  gap: 10px;
  border-radius: ${({ isMobile }) => (isMobile ? "0px" : "32px")};
  background: ${({ active }) => (active ? "#8866DD" : "")};
  text-align: center;
  color: ${({ theme, active }) =>
    active ? "#FFFFFF" : theme.palette.custom.textTertiary};
  font-family: Inter;
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-weight: 600;
  line-height: 140%;
  cursor: pointer;
`;

export interface NavbarItemsProps {
  navItems?: NavItem[];
  onClickItem?: (item: NavItem) => void;
  isActiveItem?: (item: NavItem) => boolean;
  isMobile?: boolean;
  fontSize?: number;
}

const NavbarItems = ({
  navItems = DEFAULT_NAV_ITEMS,
  onClickItem,
  isActiveItem,
  isMobile,
  fontSize = 16,
}: NavbarItemsProps) => {
  return (
    <>
      {navItems.map((item, idx) => (
        <NavLinkItem
          isMobile={isMobile}
          key={idx}
          active={isActiveItem?.(item)}
          onClick={() => onClickItem?.(item)}
          underline="none"
          fontSize={fontSize}
        >
          {item.label}
        </NavLinkItem>
      ))}
    </>
  );
};

export default NavbarItems;

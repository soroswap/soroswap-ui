import { styled } from "@mui/material";

const NavBar = styled("div")<{ height?: string }>`
  display: flex;
  height: ${(props) => props.height || "40px"};
  padding: 0px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 32px;
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 4px 10px 0px rgba(136, 102, 221, 0.03);
`;

export interface NavBarDesktopProps {
  height?: number;
  children: React.ReactNode;
}

const NavBarDesktop = ({ height = 50, children }: NavBarDesktopProps) => {
  return <NavBar height={height + "px"}>{children}</NavBar>;
};

export default NavBarDesktop;

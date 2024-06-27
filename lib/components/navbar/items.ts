export interface NavItem {
  label: string;
  path: string;
}

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  {
    path: "/balance",
    label: "Balance",
  },
  {
    path: "/swap",
    label: "Swap",
  },
  {
    path: "/liquidity",
    label: "Liquidity",
  },
  {
    path: "/bridge",
    label: "Bridge",
  },
  {
    path: "/",
    label: "Info",
  },
];

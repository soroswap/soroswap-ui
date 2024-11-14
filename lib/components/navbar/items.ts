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
    path: "/pools",
    label: "Pools",
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

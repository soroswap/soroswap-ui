import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../../lib";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

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

export const Default: Story = {
  args: {
    navItems,
  },
};

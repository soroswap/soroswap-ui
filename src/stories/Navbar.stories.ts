import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "../../lib";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    onClickItem: (item) => {
      if (item.path === "/") {
        window.open(`https://info.soroswap.finance`, "_blank");
      } else {
        window.open(`https://app.soroswap.finance${item.path}`, "_blank");
      }
    },
    isActiveItem: (item) => item.label === "Swap",
  },
};

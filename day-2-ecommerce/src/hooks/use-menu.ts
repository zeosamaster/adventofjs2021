import React from "react";
import { Item } from "../types/item";

import { menuList } from "./menu-list";

export function useMenu() {
  const [menu, setMenu] = React.useState<Item[]>([]);

  React.useEffect(() => {
    setMenu(menuList);
  }, []);

  return menu;
}

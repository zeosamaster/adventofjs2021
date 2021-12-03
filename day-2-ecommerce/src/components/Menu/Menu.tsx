import { useMenu } from "../../hooks/use-menu";
import { Section } from "../Section";

import "./Menu.css";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const menuItems = useMenu();

  return (
    <Section id="menu" title="To Go Menu">
      {menuItems.map((item) => (
        <MenuItem key={item.title} {...item} />
      ))}
    </Section>
  );
}

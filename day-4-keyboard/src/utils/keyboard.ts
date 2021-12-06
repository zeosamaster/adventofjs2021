import { Key } from "../types/key";

export const row1: Key[] = [
  { id: "`", label: "`" },
  { id: "1", label: "1", canJingle: true },
  { id: "2", label: "2", canJingle: true },
  { id: "3", label: "3", canJingle: true },
  { id: "4", label: "4", canJingle: true },
  { id: "5", label: "5", canJingle: true },
  { id: "6", label: "6", canJingle: true },
  { id: "7", label: "7", canJingle: true },
  { id: "8", label: "8", canJingle: true },
  { id: "9", label: "9", canJingle: true },
  { id: "0", label: "0", canJingle: true },
  { id: "-", label: "-" },
  { id: "=", label: "=" },
  { id: "BACKSPACE", label: "DEL" },
];

export const row2: Key[] = [
  { id: "TAB", label: "Tab", utility: true },
  { id: "Q", label: "Q", canJingle: true },
  { id: "W", label: "W", canJingle: true },
  { id: "E", label: "E", canJingle: true },
  { id: "R", label: "R", canJingle: true },
  { id: "T", label: "T", canJingle: true },
  { id: "Y", label: "Y", canJingle: true },
  { id: "U", label: "U", canJingle: true },
  { id: "I", label: "I", canJingle: true },
  { id: "O", label: "O", canJingle: true },
  { id: "P", label: "P", canJingle: true },
  { id: "[", label: "[" },
  { id: "]", label: "]" },
  { id: "\\", label: "\\" },
];

export const row3: Key[] = [
  { id: "CAPSLOCK", label: "CAPS", utility: true },
  { id: "A", label: "A", canJingle: true },
  { id: "S", label: "S", canJingle: true },
  { id: "D", label: "D", canJingle: true },
  { id: "F", label: "F", canJingle: true },
  { id: "G", label: "G", canJingle: true },
  { id: "H", label: "H", canJingle: true },
  { id: "J", label: "J", canJingle: true },
  { id: "K", label: "K", canJingle: true },
  { id: "L", label: "L", canJingle: true },
  { id: ";", label: ";" },
  { id: "'", label: "'" },
  { id: "ENTER", label: "ENTER", utility: true },
];

export const row4: Key[] = [
  { id: "SHIFT", label: "SHIFT", utility: true },
  { id: "Z", label: "Z", canJingle: true },
  { id: "X", label: "X", canJingle: true },
  { id: "C", label: "C", canJingle: true },
  { id: "V", label: "V", canJingle: true },
  { id: "B", label: "B", canJingle: true },
  { id: "N", label: "N", canJingle: true },
  { id: "M", label: "M", canJingle: true },
  { id: ",", label: "," },
  { id: ".", label: "." },
  { id: "/", label: "/" },
  { id: "SHIFT-2", label: "SHIFT", utility: true },
];

export const jingleKeys = [row1, row2, row3, row4].reduce(
  (acc: string[], row: Key[]) => {
    return [...acc, ...row.filter((k) => k.canJingle).map((k) => k.id)];
  },
  []
);

export function getRandom(): string {
  return jingleKeys[Math.floor(Math.random() * jingleKeys.length)];
}

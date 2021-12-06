import React from "react";
import { Key as KeyType } from "../types/key";

interface Props extends KeyType {
  jiggle: boolean;
  keyPressed: boolean;
}

export function Key({ id, utility, label, jiggle, keyPressed }: Props) {
  const className = [
    "key",
    ...(utility ? ["utility"] : []),
    ...(jiggle ? ["jiggle"] : []),
    ...(keyPressed && !jiggle ? ["wrong"] : []),
  ].join(" ");

  return (
    <div className={className} data-key={id}>
      {label}
    </div>
  );
}

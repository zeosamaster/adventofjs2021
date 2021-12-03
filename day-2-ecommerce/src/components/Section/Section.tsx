import React from "react";

import "./Section.css";

interface Props {
  id: string;
  title: string;
}

export function Section({
  id,
  title,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`section ${id}`}>
      <div className="container">
        <div className="title">{title}</div>
        {children}
      </div>
    </div>
  );
}

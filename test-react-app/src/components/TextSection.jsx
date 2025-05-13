import React from "react";
import "../styles/main.css";

export default function TextSection({
  text,
  children,
  classn = "text-container",
}) {
  return (
    <div className="text-section">
      <div className={classn}>{text}</div>
      {children && <div className="button-wrapper">{children}</div>}
    </div>
  );
}

import React from "react";
import "../styles/main.css";

export default function TextSection({ text, classn = "text-container" }) {
  return (
    <div className="text-section">
      <div className={classn}>{text}</div>
    </div>
  );
}

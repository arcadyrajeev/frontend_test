import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  return (
    <div className="outer-wrapper">
      <div className="sticky-header">
        <div className="sticky-content">
          <h1>DIGITAL INNOVATION STUDIO</h1>
        </div>
      </div>
    </div>
  );
}

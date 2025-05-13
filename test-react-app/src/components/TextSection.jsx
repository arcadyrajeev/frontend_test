import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/main.css";

gsap.registerPlugin(ScrollTrigger);

export default function TextSection({
  text,
  children,
  classn = "text-container",
}) {
  const textRef = useRef(null); // Ref to the text container
  const coverRef = useRef(null); // Ref to the gradient cover element

  useEffect(() => {
    gsap.fromTo(
      coverRef.current,
      {
        x: "0%", // Start the gradient cover off to the right
      },
      {
        x: "100%", // Move the gradient cover to the left to reveal the text
        duration: 0.5, // Smooth duration for the transition
        ease: "power8.out", // Easing to make the transition feel smoother
        scrollTrigger: {
          trigger: textRef.current, // Trigger the animation when the text container is in view
          start: "top 80%", // Trigger when 80% of the element is in view
          end: "top 0%", // End the trigger when 20% of the element is in view
          scrub: 0.5, // Make the animation responsive to the scroll
          markers: false, // Remove markers for debug
        },
      }
    );
  }, []);

  return (
    <div className="text-section">
      <div className={classn} ref={textRef}>
        {text}
      </div>
      <div className="text-cover" ref={coverRef}></div>
      {children && <div className="button-wrapper">{children}</div>}
    </div>
  );
}

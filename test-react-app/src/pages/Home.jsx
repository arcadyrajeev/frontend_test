import React from "react";
import Navbar from "../components/Navbar";
import "../styles/base.css";
import HomeHero from "../components/HomeHero";
import TextSection from "../components/TextSection";
import CTA from "../components/CTAButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <TextSection
        text="Digital Innovation Studio is a forward-thinking agency that transforms
        ideas into immersive digital experiences. We specialize in creating
        innovative web solutions, captivating designs, and strategic digital
        transformations that help brands make a splash in the digital world."
      />
      <TextSection
        text='"Working with Digital Innovation Studio was an exceptional experience from start to finish."'
        classn="bigtext-container"
      />
      <TextSection text="Our expertise is in designing visuals that effectively connect with the target audience.">
        <CTA text="WORK WITH US" link="/" />
      </TextSection>
      <TextSection text="Discover how Digital Innovation Studio can help transform your digital presence with our innovative solutions and creative expertise.">
        <CTA text="VIEW ALL" link="/" />
      </TextSection>
    </div>
  );
}

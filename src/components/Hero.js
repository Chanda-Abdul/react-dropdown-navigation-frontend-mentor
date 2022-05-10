import React, { useState, useEffect } from "react";
import { StyledHero } from "./styles/Hero.styled";


export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const heroImage =
    windowWidth >= 650
      ? "./images/image-hero-desktop.png"
      : "./images/image-hero-mobile.png";

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <StyledHero>
        <div className="desktop-container">
         
          <img src={`${heroImage}`} className="hero-image" alt="hero" />

          <div className="hero-text">
            <h1> Make remote work</h1>

            <p>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </StyledHero>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import Menu from "./Menu";

export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth >= 650 ? false : true);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(windowWidth >= 650 ? false : true);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <>
      <StyledHeader>
        <Nav>
          <Logo src="./images/logo.svg" alt="header-logo" />
          {isMobile && (!displayMenu ? (
            <>
              <a href="#" class="burger-menu" onClick={handleToggle}>
                <img src="./images/icon-menu.svg" alt="menu" />
              </a>
            </>
          ) : (
            <Menu setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
          ))}

          {!isMobile && (
            <>
              <Menu />
              
            </>
          )}
        </Nav>
      </StyledHeader>
    </>
  );
}

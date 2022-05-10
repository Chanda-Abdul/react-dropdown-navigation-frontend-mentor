import React, { useState, useEffect } from 'react';
import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import MobileDropDownMenu from './MobileDropDownMenu';
import DesktopMenuBar from './DesktopMenuBar';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth >= 650 ? false : true);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(windowWidth >= 650 ? false : true);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      <StyledHeader>
        <Nav>
          <Logo src='./images/logo.svg' alt='header-logo' />

          {isMobile ? <MobileDropDownMenu /> : <DesktopMenuBar />}
        </Nav>
      </StyledHeader>
    </>
  );
}

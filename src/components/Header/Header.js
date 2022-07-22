import React, { useState, useEffect } from 'react';
import { StyledHeader, Nav, Logo } from './Header.styled';
import MobileDropDownMenu from '../Menu/Mobile/MobileDropDownMenu';
import DesktopMenuBar from '../Menu/Desktop/DesktopMenuBar';

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth >= 650 ? false : true);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      setIsMobile(windowWidth >= 900 ? false : true);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      <StyledHeader>
        <div className='navigation'>
          <Logo src='./images/logo.svg' alt='header-logo' />
          <Nav>{isMobile ? <MobileDropDownMenu /> : <DesktopMenuBar />}</Nav>
        </div>
      </StyledHeader>
    </>
  );
}

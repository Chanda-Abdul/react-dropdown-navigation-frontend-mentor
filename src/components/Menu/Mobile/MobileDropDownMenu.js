import React, { useState } from 'react';
import { StyledMobileMenu } from './MobileDropDownMenu.styled';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';

export default function Menu() {
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayCompany, setDisplayCompany] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
    setDisplayFeatures(false);
    setDisplayCompany(false);
  };
  const handleDisplayFeatures = () => {
    setDisplayFeatures(!displayFeatures);
    setDisplayCompany(false);
  };
  const handleDisplayCompany = () => {
    setDisplayCompany(!displayCompany);
    setDisplayFeatures(false);
  };

  return (
    <>
      <StyledMobileMenu>
        {!displayMenu && (
          <>
            <VscMenu
              className='burger-menu'
              onClick={handleToggle}
              size={36}
            />
          </>
        )}

        {displayMenu && (
          <>
            <div className='container'></div>
            <div className='dropdown-menu'>
              <div className='content'>
                <ul>
                  <li className='close-menu'>                   
                      <VscChromeClose
                        className='close-button'
                        alt='close-button'
                        onClick={handleToggle}
                        size={30}
              
                      />
                  </li>
                  <li>
                    <a
                      href='/#'
                      className='level-one'
                      onClick={handleDisplayFeatures}
                    >
                      Features{' '}
                      {!displayFeatures ? (
                        <IoIosArrowDown alt='collapse-menu' />
                      ) : (
                        <IoIosArrowUp alt='expand-menu' />
                      )}
                    </a>
                  </li>

                  {displayFeatures && (
                    <>
                      <ul className='features-list'>
                        <li className='level-two'>
                          <img src='./images/icon-todo.svg' alt='to-do' />
                          <a href='/#'>Todo List</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-calendar.svg'
                            alt='calendar'
                          />
                          <a href='/#'>Calendar</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-reminders.svg'
                            alt='reminders'
                          />
                          <a href='/#'>Reminders</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-planning.svg'
                            alt='planning'
                          />
                          <a href='/#'>Planning</a>
                        </li>
                      </ul>
                    </>
                  )}

                  <li>
                    <a
                      href='/#'
                      className='level-one'
                      onClick={handleDisplayCompany}
                    >
                      Company{' '}
                      {!displayCompany ? (
                        <IoIosArrowDown alt='collapse-menu' />
                      ) : (
                        <IoIosArrowUp alt='expand-menu' />
                      )}
                    </a>
                  </li>

                  {displayCompany && (
                    <>
                      {' '}
                      <ul className='company-list'>
                        <li className='level-two'>
                          <a href='/#'>History</a>
                        </li>
                        <li className='level-two'>
                          <a href='/#'>Our Team</a>
                        </li>
                        <li className='level-two'>
                          <a href='/#'>Blog</a>
                        </li>
                      </ul>
                    </>
                  )}

                  <li>
                    <a href='/#' className='level-one'>
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href='/#' className='level-one'>
                      About
                    </a>
                  </li>
                </ul>
                <div className='cta'>
                  <a href='/#'>Login</a>
                  <button>Register</button>
                </div>
              </div>
            </div>
          </>
        )}
      </StyledMobileMenu>
    </>
  );
}

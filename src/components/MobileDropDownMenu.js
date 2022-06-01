import React, { useState } from 'react';
import { StyledMobileMenu } from './styles/MobileDropDownMenu.styled';

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
            <img
              src='./images/icon-menu.svg'
              alt='menu'
              class='burger-menu'
              onClick={handleToggle}
            />
          </>
        )}

        {displayMenu && (
          <>
            <div className='container'></div>
            <div class='dropdown-menu'>
              <div className='content'>
                <ul>
                  <li className='close-menu'>
                    <img
                      src='./images/icon-close-menu.svg'
                      alt='close-menu'
                      onClick={handleToggle}
                    />
                  </li>
                  <li>
                    <a
                      href='#features'
                      className='level-one'
                      onClick={handleDisplayFeatures}
                    >
                      Features{' '}
                      {!displayFeatures ? (
                        <img
                          src='./images/icon-arrow-down.svg'
                          alt='down-arrow'
                        />
                      ) : (
                        <img src='./images/icon-arrow-up.svg' alt='up-arrow' />
                      )}
                    </a>
                  </li>

                  {displayFeatures && (
                    <>
                      <ul className='features-list'>
                        <li className='level-two'>
                          <img src='./images/icon-todo.svg' alt='to-do' />
                          <a href='#todolist'>Todo List</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-calendar.svg'
                            alt='calendar'
                          />
                          <a href='#calendar'>Calendar</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-reminders.svg'
                            alt='reminders'
                          />
                          <a href='#reminders'>Reminders</a>
                        </li>
                        <li className='level-two'>
                          <img
                            src='./images/icon-planning.svg'
                            alt='planning'
                          />
                          <a href='#planning'>Planning</a>
                        </li>
                      </ul>
                    </>
                  )}

                  <li>
                    <a
                      href='#company'
                      className='level-one'
                      onClick={handleDisplayCompany}
                    >
                      Company{' '}
                      {!displayCompany ? (
                        <img
                          src='./images/icon-arrow-down.svg'
                          alt='down-arrow'
                        />
                      ) : (
                        <img src='./images/icon-arrow-up.svg' alt='up-arrow' />
                      )}
                    </a>
                  </li>

                  {displayCompany && (
                    <>
                      {' '}
                      <ul className='company-list'>
                        <li className='level-two'>
                          <a href='#history'>History</a>
                        </li>
                        <li className='level-two'>
                          <a href='#team'>Our Team</a>
                        </li>
                        <li className='level-two'>
                          <a href='#blog'>Blog</a>
                        </li>
                      </ul>
                    </>
                  )}

                  <li>
                    <a href='#careers' className='level-one'>
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href='#about' className='level-one'>
                      About
                    </a>
                  </li>
                </ul>
                <div className='cta'>
                  <a href='#login'>Login</a>
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

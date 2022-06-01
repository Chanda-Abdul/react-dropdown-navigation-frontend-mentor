import React, { useState } from 'react';
import { StyledDesktopMenu } from './styles/DesktopMenuBar.styled';

export default function Menu() {
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayCompany, setDisplayCompany] = useState(false);

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
      <StyledDesktopMenu>
        <div className='content'>
          <ul className='menu-links'>
            <li>
              <a
                href='#features'
                className='level-one'
                onClick={handleDisplayFeatures}
              >
                Features{' '}
                {!displayFeatures ? (
                  <img src='./images/icon-arrow-down.svg' alt='down-arrow' />
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
                    <a href='#todo'>Todo List</a>
                  </li>
                  <li className='level-two'>
                    <img src='./images/icon-calendar.svg' alt='calendar' />
                    <a href='#'>Calendar</a>
                  </li>
                  <li className='level-two'>
                    <img src='./images/icon-reminders.svg' alt='reminders' />
                    <a href='#'>Reminders</a>
                  </li>
                  <li className='level-two'>
                    <img src='./images/icon-planning.svg' alt='planning' />
                    <a href='#'>Planning</a>
                  </li>
                </ul>
              </>
            )}

            <li>
              <a href='#' className='level-one' onClick={handleDisplayCompany}>
                Company{' '}
                {!displayCompany ? (
                  <img src='./images/icon-arrow-down.svg' alt='down-arrow' />
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
                    <a href='#'>History</a>
                  </li>
                  <li className='level-two'>
                    <a href='#'>Our Team</a>
                  </li>
                  <li className='level-two'>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </>
            )}

            <li>
              <a href='#' className='level-one'>
                Careers
              </a>
            </li>

            <li>
              <a href='#' className='level-one'>
                About
              </a>
            </li>
          </ul>
          <section className='cta'>
            <a href='#'>Login</a>
            <button>Register</button>
          </section>
        </div>
      </StyledDesktopMenu>
    </>
  );
}

import React, { useState } from "react";
import { StyledMenu } from "./styles/Menu.styled";

export default function Menu({ setDisplayMenu, displayMenu }) {
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayCompany, setDisplayCompany] = useState(false);

  const handleToggle = () => {
    setDisplayMenu(!displayMenu);
  };
  const handleDisplayFeatures = () => {
    setDisplayFeatures(!displayFeatures);
  };
  const handleDisplayCompany = () => {
    setDisplayCompany(!displayCompany);
  };

  return (
    <>
      <StyledMenu>
        {/* TODO => display hamburger at mobile breakpoint  || menu close*/}
        {/* TODO => overlay/opacity when menu is open*/}

        <div class="container">
          <div class="dropdown-menu">
            <div className="content">
              <ul>
                <li>
                  <a
                    href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor"
                    class="burger-menu-close"
                    onClick={handleToggle}
                    className="close"
                  >
                    <img src="./images/icon-close-menu.svg" alt="close-menu" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor" className="level-one">
                    Features{" "}
                    {!displayFeatures ? (
                      <img
                        src="./images/icon-arrow-down.svg"
                        onClick={handleDisplayFeatures}
                        alt="down-arrow"
                      />
                    ) : (
                      <img
                        src="./images/icon-arrow-up.svg"
                        onClick={handleDisplayFeatures}
                        alt="up-arrow"
                      />
                    )}
                  </a>
                </li>

                {displayFeatures && (
                  <>
                    <ul className="features-list">
                      <li className="level-two">
                        <img src="./images/icon-todo.svg" alt="to-do"/>
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Todo List</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-calendar.svg" alt="calendar"/>
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Calendar</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-reminders.svg" alt="reminders"/>
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Reminders</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-planning.svg" alt="planning"/>
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Planning</a>
                      </li>
                    </ul>
                  </>
                )}

                <li>
                  <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor" className="level-one">
                    Company{" "}
                    {!displayCompany ? (
                      <img
                        src="./images/icon-arrow-down.svg"
                        onClick={handleDisplayCompany}
                        alt="down-arrow"
                      />
                    ) : (
                      <img
                        src="./images/icon-arrow-up.svg"
                        onClick={handleDisplayCompany}
                        alt="up-arrow"
                      />
                    )}
                  </a>
                </li>

                {displayCompany && (
                  <>
                    {" "}
                    <ul className="company-list">
                      <li className="level-two">
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">History</a>
                      </li>
                      <li className="level-two">
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Our Team</a>
                      </li>
                      <li className="level-two">
                        <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Blog</a>
                      </li>
                    </ul>
                  </>
                )}

                <li>
                  <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor" className="level-one">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor" className="level-one">
                    About
                  </a>
                </li>
                {/* TODO? => display Login/Register at desktop breakpoint*/}
              </ul>
              <div className="cta">
                <a href="https://github.com/Chanda-Abdul/react-dropdown-navigation-frontend-mentor">Login</a>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </StyledMenu>
    </>
  );
}

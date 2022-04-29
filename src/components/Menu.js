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
                    href="#"
                    class="burger-menu-close"
                    onClick={handleToggle}
                    className="close"
                  >
                    <img src="./images/icon-close-menu.svg" alt="close-menu" />
                  </a>
                </li>
                <li>
                  <a href="#" className="level-one">
                    Features{" "}
                    {!displayFeatures ? (
                      <img
                        src="./images/icon-arrow-down.svg"
                        onClick={handleDisplayFeatures}
                      />
                    ) : (
                      <img
                        src="./images/icon-arrow-up.svg"
                        onClick={handleDisplayFeatures}
                      />
                    )}
                  </a>
                </li>

                {displayFeatures && (
                  <>
                    <ul className="features-list">
                      <li className="level-two">
                        <img src="./images/icon-todo.svg" />
                        <a href="#">Todo List</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-calendar.svg" />
                        <a href="#">Calendar</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-reminders.svg" />
                        <a href="#">Reminders</a>
                      </li>
                      <li className="level-two">
                        <img src="./images/icon-planning.svg" />
                        <a href="#">Planning</a>
                      </li>
                    </ul>
                  </>
                )}

                <li>
                  <a href="#" className="level-one">
                    Company{" "}
                    {!displayCompany ? (
                      <img
                        src="./images/icon-arrow-down.svg"
                        onClick={handleDisplayCompany}
                      />
                    ) : (
                      <img
                        src="./images/icon-arrow-up.svg"
                        onClick={handleDisplayCompany}
                      />
                    )}
                  </a>
                </li>

                {displayCompany && (
                  <>
                    {" "}
                    <ul className="company-list">
                      <li className="level-two">
                        <a href="#">History</a>
                      </li>
                      <li className="level-two">
                        <a href="#">Our Team</a>
                      </li>
                      <li className="level-two">
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </>
                )}

                <li>
                  <a href="#" className="level-one">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="level-one">
                    About
                  </a>
                </li>
                {/* TODO? => display Login/Register at desktop breakpoint*/}
              </ul>
              <div className="cta">
                <a href="#">Login</a>
                <button>Register</button>
              </div>
            </div>
          </div>
        </div>
      </StyledMenu>
    </>
  );
}

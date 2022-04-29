import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <footer>
          <ul className="client-list">
            <li>
              <img src="./images/client-databiz.svg" alt="databiz"/>
            </li>
            <li>
              <img src="./images/client-audiophile.svg"  alt="audiophile"/>
            </li>
            <li>
              <img src="./images/client-meet.svg"  alt="meet"/>
            </li>
            <li>
              <img src="./images/client-maker.svg"  alt="maker"/>
            </li>
          </ul>
          <p>
            <div class="attribution">
              Challenge by
              <a
                href="https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Frontend Mentor{" "}
              </a>
              . 
              Coded by <a href="ChandaCodes.com"> Chanda Abdul</a>.
            </div>
          </p>
        </footer>
      </StyledFooter>
    </>
  );
}

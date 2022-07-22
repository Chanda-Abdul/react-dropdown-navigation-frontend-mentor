import { StyledFooter } from './Footer.styled';

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <footer className='attribution'>
          Challenge by
          <a
            href='https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Frontend Mentor{' '}
          </a>
          . Coded by <a href='ChandaCodes.com'> Chanda Abdul</a>.
        </footer>
      </StyledFooter>
    </>
  );
}

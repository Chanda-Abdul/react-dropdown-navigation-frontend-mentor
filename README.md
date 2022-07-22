# Frontend Mentor - Intro section with dropdown navigation

![Design preview for the Intro section with dropdown navigation coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview

### The challenge
Your challenge is to build out this intro section with dropdown navigation and get it looking as close to the design as possible.

Users should be able to:

- [x] View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- [x] View the optimal layout for the content depending on their device's screen size
- [x] See hover states for all interactive elements on the page

## Screenshots

### Desktop

<img src="./design/desktop-design.jpg" alt="" width="600"/>

### Mobile
<img src="./design/mobile-design.jpg" alt="" width="350"/>

#### Dropdown Menu - Collapsed ➡️ Dropdown Menu - Expanded
<img src="./design/mobile-menu-collapsed.jpg" alt="" width="350"/> <img src="./design/mobile-menu-expanded.jpg" alt="" width="350"/>



### Active States
<img src="./design/active-states.jpg" alt="" width="600"/>

## Links

- Solution Live Site URL: [live site](https://darling-boba-0cc95f.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JavaScript Framework
  - React Hooks
- [React Styled Components](https://styled-components.com/) 
  - For <b>CSS</b> Styles
  - Mobile-first workflow
    -  Mobile breakpoint: 375px
    -  Tablet beakpoint: 600px
    -  Desktop breakpoint: 900px

### What I learned
This dropdown menu project was fun a fun learning experince.  One of my primary considerations while building this project was how to handle the "burger" dropdown menu on mobile viewports, and the "header" menu on desktop viewports.  I decided that the best way for me approach this would be to create two separate components `<MobileDropdownMenu/>` and `<DesktopMenuBar/>` that could be conditionally rendered with a listener and a `useEffect` hook, in the `<Header/>` based on viewport size.

- `useState` and `useEffect` hooks
```js
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
```
-  conditional render of `<MobileDropdownMenu/>` and `<DesktopMenuBar/>` 
```js
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
  ```
  - I also learned how to add an overlay to the all elements on the page EXCECT the mobile dropdown menu while the menu is open.  This was a bit tricky, but I've noticed that this is a common frontend pattern and I see it everywhere now.

  ```js
   .container::before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.75);
    animation: transitionIn .75s;
  }
  ```

  - I thought that this project would be a good opportunity to practice my animation skills, to add some polish to my project.  I considered using <b>[React Spring](https://react-spring.dev/)</b>, but I decided to save that for another project and I used <b>CSS Animations</b> instead.

### Continued development
- [x] add animations
- [ ] make menu links dynamic, not hard coded
- [ ] `aria` attributes and accessiblility

### Useful resources

- [Responsive Background Images Using React Hooks🍍](https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f) To responsively render images based on the current device breakpoint.
- [CSS Overlay Techniques](https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/) To add overlay to all other content while the mobile dropdown menu is open

## Author

- Frontend Mentor - [@Chanda-Abdul](https://www.frontendmentor.io/profile/Chanda-Abdul)
- Website - [Chanda Codes](https://chandacodes.com/)
- GitHub - [github.com/Chanda-Abdul](https://github.com/Chanda-Abdul)


## Acknowledgments



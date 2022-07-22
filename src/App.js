import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import './App.css';

const theme = {
  mobile: '375px',
  tablet: '900px',
  desktop: '900px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Header />
          <Hero />
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

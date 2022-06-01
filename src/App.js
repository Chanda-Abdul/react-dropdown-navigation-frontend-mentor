import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

const theme = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1440px',
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

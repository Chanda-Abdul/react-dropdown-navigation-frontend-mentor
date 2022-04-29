import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

const theme = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1440px",
  almostWhite: "hsl(0, 0%, 98%)",
  mediumGray: "hsl(0, 0%, 41%)",
  almostBlack: "hsl(0, 0%, 8%)",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <Hero />
        
         
        </div>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;

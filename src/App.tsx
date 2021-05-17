import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Routes from "./Routes";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

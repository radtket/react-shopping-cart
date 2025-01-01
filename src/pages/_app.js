import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry, {
  GlobalStyle,
} from "../styles/StyledComponentsRegistry";
import theme from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

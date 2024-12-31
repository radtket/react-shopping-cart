import { Roboto } from "next/font/google";
import "normalize.css/normalize.css";
import { ThemeProvider } from "styled-components";
import Store from "../components/Store";
import StyledComponentsRegistry, {
  GlobalStyle,
} from "../styles/StyledComponentsRegistry";
import theme from "../styles/theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className={roboto.className}>
          <Store />
        </div>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}

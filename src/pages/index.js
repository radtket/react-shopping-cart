import Products from "@/components/Products";
import { Roboto } from "next/font/google";
import Image from "next/image";
import "normalize.css/normalize.css";
import { ThemeProvider } from "styled-components";
import Filter from "../components/Filter";
import { CartProvider } from "../context/cart";
import { ProductsProvider } from "../context/products";
import StyledComponentsRegistry, {
  GlobalStyle,
} from "../styles/StyledComponentsRegistry";
import { Side, TwoColumnGrid } from "../styles/styled-components";
import theme from "../styles/theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Home() {
  return (
    <StyledComponentsRegistry>
      <ProductsProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className={roboto.className}>
              <TwoColumnGrid>
                <Side>
                  <Filter />
                  <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                  />
                </Side>
                <Products />
              </TwoColumnGrid>
            </div>
          </ThemeProvider>
        </CartProvider>
      </ProductsProvider>
    </StyledComponentsRegistry>
  );
}

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}

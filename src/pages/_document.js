import { Head, Html, Main, NextScript } from "next/document";
import "normalize.css/normalize.css";
import { CartProvider } from "../context/cart";
import { ProductsProvider } from "../context/products";
import StyledComponentsRegistry from "../styles/StyledComponentsRegistry";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <StyledComponentsRegistry>
          <ProductsProvider>
            <CartProvider>
              <Main />
              <NextScript />
            </CartProvider>
          </ProductsProvider>
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}

export default Document;
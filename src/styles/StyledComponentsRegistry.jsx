"use client";

import { useServerInsertedHTML } from "next/navigation";
import PropTypes from "prop-types";
import { useRef } from "react";
import {
  ServerStyleSheet,
  StyleSheetManager,
  createGlobalStyle,
} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const styledComponentsStyleSheet = useRef(new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.current.getStyleElement();
    styledComponentsStyleSheet.current.instance.clearTag();
    return styles;
  });

  if (typeof window !== "undefined") {
    return children;
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.current.instance}>
      {children}
    </StyleSheetManager>
  );
}

StyledComponentsRegistry.propTypes = {
  children: PropTypes.node.isRequired,
};

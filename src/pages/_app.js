import PropTypes from "prop-types";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

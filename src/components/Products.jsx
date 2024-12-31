import { size } from "lodash";
import PropTypes from "prop-types";
import { ProductsWrapper } from "../styles/styled-components";
import Product from "./Product";

function Products({ products }) {
  return (
    <ProductsWrapper>
      <div>
        <h2>{size(products)} Product(s) found</h2>
        <main>
          {products.map(p => (
            <Product key={p.sku} product={p} />
          ))}
        </main>
      </div>
    </ProductsWrapper>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Products;

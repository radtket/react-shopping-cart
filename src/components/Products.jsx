import { size } from "lodash";
import PropTypes from "prop-types";
import { ProductsWrapper } from "../styles/styled-components";
import { formatPrice, updateCartTotal } from "../utils";
import Product from "./Product";

function Products({ products, setState }) {
  return (
    <ProductsWrapper>
      <div>
        <h2>{size(products)} Product(s) found</h2>
        <main>
          {products.map(p => (
            <Product
              key={p.sku}
              {...p}
              formattedPrice={formatPrice(p)}
              handleAddProduct={() => {
                setState(prev => {
                  const cart = updateCartTotal(prev.cart, p);

                  return { ...prev, isCartOpen: true, cart };
                });
              }}
            />
          ))}
        </main>
      </div>
    </ProductsWrapper>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setState: PropTypes.func.isRequired,
};

export default Products;

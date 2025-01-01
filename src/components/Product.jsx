import PropTypes from "prop-types";
import { formatPrice } from "../utils";
import { BuyButton, Stopper, StyledProduct } from "../styles/styled-components";

function Product({
  currencyFormat,
  currencyId,
  formattedPrice,
  handleAddProduct,
  installments,
  isFreeShipping,
  price,
  sku,
  title,
}) {
  return (
    <StyledProduct
      sku={sku}
      // tabIndex={1}
      onClick={({ key, code }) => {
        if (key === "Enter" || code === "Space") {
          handleAddProduct();
        }
      }}
    >
      {isFreeShipping && <Stopper>Free shipping</Stopper>}
      <figure alt={title} />
      <dl>
        <dt>{title}</dt>
        <dd>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </dd>
        {Boolean(installments) && (
          <dd>
            <span>or {installments} x</span>
            <b>
              {currencyFormat}
              {formatPrice({ price: price / installments, currencyId })}
            </b>
          </dd>
        )}
      </dl>

      <BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </BuyButton>
    </StyledProduct>
  );
}

Product.propTypes = {
  currencyFormat: PropTypes.string.isRequired,
  currencyId: PropTypes.string.isRequired,
  formattedPrice: PropTypes.string.isRequired,
  handleAddProduct: PropTypes.func.isRequired,
  installments: PropTypes.number.isRequired,
  isFreeShipping: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default Product;

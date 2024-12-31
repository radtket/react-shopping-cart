import { useMemo } from "react";
import { BuyButton, Stopper, StyledProduct } from "../styles/styled-components";
import { formatPrice } from "../utils";

function Product({ product }) {
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product;

  const formattedPrice = useMemo(
    () => formatPrice(price, currencyId),
    [currencyId, price]
  );

  return (
    <StyledProduct sku={sku} tabIndex={1}>
      {isFreeShipping && <Stopper>Free shipping</Stopper>}
      <figure alt={title} />
      <dl>
        <dt>{title}</dt>
        <dd>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </dd>
      </dl>

      <BuyButton onClick={() => {}} tabIndex={-1}>
        Add to cart
      </BuyButton>
    </StyledProduct>
  );
}
export default Product;

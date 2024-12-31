import { BuyButton, Stopper, StyledProduct } from "../styles/styled-components";

function Product({
  currencyFormat,
  currencyId,
  installments,
  isFreeShipping,
  price,
  sku,
  title,
  handleAddProduct,
  formattedPrice,
}) {
  return (
    <StyledProduct
      sku={sku}
      tabIndex={1}
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
      </dl>

      <BuyButton onClick={handleAddProduct} tabIndex={-1}>
        Add to cart
      </BuyButton>
    </StyledProduct>
  );
}
export default Product;

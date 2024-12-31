import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { formatPrice } from "../utils";

import { CartIconWrapper, StyledCart } from "../styles/styled-components";

function Cart({ isCartOpen, onClick }) {
  const {
    productQuantity,
    currencyFormat,
    totalPrice = 0,
    currencyId,
    installments,
  } = {
    currencyFormat: "$",
    currencyId: "USD",
    installments: 3,
    productQuantity: 1,
    totalPrice: 9,
  };

  const products = [
    {
      availableSizes: ["X", "L", "XL", "XXL"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "14/15 s/nº",
      id: 0,
      installments: 9,
      isFreeShipping: true,
      price: 10.9,
      sku: 8552515751438644,
      style: "White T-shirt",
      title: "Cropped Stay Groovy off white",
      quantity: 1,
    },
    {
      availableSizes: ["X", "ML", "L"],
      currencyFormat: "$",
      currencyId: "USD",
      description: "",
      id: 11,
      installments: 3,
      isFreeShipping: true,
      price: 13.25,
      sku: 39876704341265610,
      style: "Wine",
      title: "Basic Cactus White T-shirt",
      quantity: 1,
    },
  ];

  const CartIcon = useCallback(
    ({ isLarge }) => (
      <CartIconWrapper isLarge={isLarge}>
        <span title="Products in cart quantity">{productQuantity}</span>
      </CartIconWrapper>
    ),
    [productQuantity]
  );

  return (
    <StyledCart isCartOpen={isCartOpen}>
      <button type="button" onClick={onClick}>
        {isCartOpen ? <span>X</span> : <CartIcon />}
      </button>

      {isCartOpen && (
        <div>
          <header>
            <CartIcon isLarge />
            <span>Cart</span>
          </header>
          <ul>
            {isEmpty(products) ? (
              <li className="cart-item--empty">
                Add some products in the cart <br />:
              </li>
            ) : (
              products.map(
                ({ title, sku, availableSizes, style, quantity }) => (
                  <li key={sku} className="cart-item">
                    <button
                      onClick={() => {}}
                      type="button"
                      title="remove product from cart"
                    >
                      X
                    </button>
                    <img alt={title} src={`/products/${sku}-1-cart.webp`} />
                    <dl>
                      <dt>{title}</dt>
                      <dd>
                        {`${availableSizes[0]} | ${style}`} <br />
                        Quantity: {quantity}
                      </dd>
                    </dl>
                    <div>
                      <p>$ 10.90</p>
                      <nav>
                        <button
                          type="button"
                          onClick={() => {}}
                          disabled={quantity === 1}
                        >
                          -
                        </button>
                        <button type="button" onClick={() => {}}>
                          +
                        </button>
                      </nav>
                    </div>
                  </li>
                )
              )
            )}
          </ul>

          <footer>
            <p>SUBTOTAL</p>
            <dl>
              <dt>{`${currencyFormat} ${formatPrice(totalPrice, currencyId)}`}</dt>
              <dd>
                {installments && (
                  <span>
                    {`OR UP TO ${installments} x ${
                      currencyFormat
                    } ${formatPrice(totalPrice / installments, currencyId)}`}
                  </span>
                )}
              </dd>
            </dl>
            <button type="button" onClick={() => {}}>
              Checkout
            </button>
          </footer>
        </div>
      )}
    </StyledCart>
  );
}

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cart;

import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { formatPrice } from "../utils";

import { CartIconWrapper, StyledCart } from "../styles/styled-components";

const initalState = {
  productQuantity: 0,
  installments: 0,
  totalPrice: 0,
  currencyId: "USD",
  currencyFormat: "$",
};

function Cart({ isCartOpen, setState, cart }) {
  const {
    productQuantity,
    installments,
    totalPrice,
    currencyId,
    currencyFormat,
    items,
  } = cart;

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
      <button
        type="button"
        onClick={() => {
          setState(prev => ({ ...prev, isCartOpen: !prev.isCartOpen }));
        }}
      >
        {isCartOpen ? <span>X</span> : <CartIcon />}
      </button>

      {isCartOpen && (
        <div>
          <header>
            <CartIcon isLarge />
            <span>Cart</span>
          </header>
          <ul>
            {isEmpty(items) ? (
              <li className="cart-item--empty">
                Add some products in the cart <br />:
              </li>
            ) : (
              items.map(p => {
                const {
                  title,
                  sku,
                  availableSizes,
                  style,
                  quantity,
                  price,
                  id,
                } = p;

                return (
                  <li key={sku} className="cart-item">
                    <button
                      // onClick={() => {
                      //   setState(prev => ({
                      //     ...prev,
                      //     cart: updateCartTotal(
                      //       {
                      //         ...prev.cart,
                      //         items: prev.cart.items.filter(
                      //           product => product.id !== id
                      //         ),
                      //       },
                      //       p
                      //     ),
                      //   }));
                      // }}
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
                      <p>{`${currencyFormat}  ${formatPrice({ price, currencyId })}`}</p>
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
                );
              })
            )}
          </ul>

          <footer>
            <p>SUBTOTAL</p>
            <dl>
              <dt>{`${currencyFormat} ${formatPrice({ price: totalPrice, currencyId })}`}</dt>
              <dd>
                {installments && (
                  <span>
                    {`OR UP TO ${installments} x ${
                      currencyFormat
                    } ${formatPrice({ price: totalPrice / installments, currencyId })}`}
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
  setState: PropTypes.func.isRequired,
  cart: PropTypes.shape({
    productQuantity: PropTypes.number,
    installments: PropTypes.number,
    totalPrice: PropTypes.number,
    currencyId: PropTypes.string,
    currencyFormat: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

export default Cart;

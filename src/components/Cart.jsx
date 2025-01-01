import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import { useCallback } from "react";
import { formatPrice, updateCartTotal } from "../utils";

import { CartIconWrapper, StyledCart } from "../styles/styled-components";

function Cart({
  currencyFormat,
  currencyId,
  installments,
  isCartOpen,
  items,
  productQuantity,
  setState,
  totalPrice,
}) {
  const CartIcon = useCallback(
    ({ isLarge }) => (
      <CartIconWrapper isLarge={isLarge}>
        <span title="Products in cart quantity">{productQuantity}</span>
      </CartIconWrapper>
    ),
    [productQuantity]
  );

  const getUpdatedProducts = useCallback(
    (id, isIncrease) => {
      setState(prev => ({
        ...prev,
        cart: updateCartTotal({
          ...prev.cart,
          items: prev.cart.items.map(p =>
            p.id === id
              ? {
                  ...p,
                  quantity: isIncrease ? p.quantity + 1 : p.quantity - 1,
                }
              : p
          ),
        }),
      }));
    },
    [setState]
  );

  return (
    <StyledCart isCartOpen={isCartOpen}>
      <button
        type="button"
        onClick={() => {
          setState(prev => {
            const copy = { ...prev };
            copy.cart.isCartOpen = !copy.cart.isCartOpen;
            return copy;
          });
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
                Add some products in the cart
              </li>
            ) : (
              items.map(
                ({
                  title,
                  sku,
                  availableSizes,
                  style,
                  quantity,
                  price,
                  id,
                }) => (
                  <li key={sku} className="cart-item">
                    <button
                      onClick={() => {
                        setState(prev => ({
                          ...prev,
                          cart: updateCartTotal({
                            ...prev.cart,
                            items: prev.cart.items.filter(
                              product => product.id !== id
                            ),
                          }),
                        }));
                      }}
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
                          onClick={() => {
                            getUpdatedProducts(id);
                          }}
                          disabled={quantity === 1}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            getUpdatedProducts(id, true);
                          }}
                        >
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
  currencyFormat: PropTypes.string.isRequired,
  currencyId: PropTypes.string.isRequired,
  installments: PropTypes.number.isRequired,
  isCartOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  productQuantity: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Cart;

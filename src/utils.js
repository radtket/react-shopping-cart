export const formatPrice = ({ price, currencyId }) => {
  switch (currencyId) {
    case "BRL":
      return price.toFixed(2).replace(".", ",");
    default:
      return price.toFixed(2);
  }
};

export const updateCartTotal = (cart, p) => {
  const copy = { ...cart };
  const productIndex = copy.items.findIndex(({ id }) => id === p.id);

  if (productIndex === -1) {
    copy.items.push({ ...p, quantity: 1 });
  } else {
    copy.items = copy.items.map(product => {
      if (product.id === p.id) {
        return { ...product, quantity: product.quantity + 1 };
      }

      return product;
    });
  }

  return copy.items.reduce(
    (acc, product) => {
      acc.productQuantity += product.quantity;
      acc.totalPrice += product.price * product.quantity;
      acc.installments +=
        product.installments > acc.installments
          ? product.installments
          : acc.installments;

      return acc;
    },
    {
      ...copy,
      productQuantity: 0,
      installments: 0,
      totalPrice: 0,
    }
  );
};

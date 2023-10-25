import { useState } from "react";
import { ProductInCartType, onChangeArgs } from "../interfaces/interfaces";

export const useShopping = () => {
  const [shoppingCart, setShoppingCart] = useState<ProductInCartType>({});

  const onProductCountChange = ({ product, counter }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
      productInCart.count += counter;
      if (Math.max(productInCart.count, counter, 0) <= 0) {
        const newShoppingCart = { ...oldShoppingCart };
        delete newShoppingCart[product.id];
        return newShoppingCart;
      }

      return {
        ...oldShoppingCart,
        [product.id]: productInCart,
      };
      // if (counter === 0) {
      //   const newShoppingCart = { ...oldShoppingCart };
      //   delete newShoppingCart[product.id];
      //   return newShoppingCart;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count: counter },
      // };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};

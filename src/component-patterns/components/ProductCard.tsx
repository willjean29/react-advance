import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductContextProps, ProductProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

export default ProductCard;

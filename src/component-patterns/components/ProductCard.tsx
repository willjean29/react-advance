import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className = "", style }: ProductCardProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <Provider
      value={{
        product,
        counter,
        increseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;

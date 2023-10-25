import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { CSSProperties, ReactElement, createContext } from "react";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces/interfaces";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className = "", style, onChange, value }: ProductCardProps) => {
  const { counter, increseBy } = useProduct({ product, onChange, value });

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

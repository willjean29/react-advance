import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className = "", style }: ProductButtonsProps) => {
  const { counter, increseBy } = useContext(ProductContext);
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increseBy(1)}>
        +
      </button>
    </div>
  );
};

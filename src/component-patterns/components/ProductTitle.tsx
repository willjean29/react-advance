import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  const titleProduct = title ? title : product.title;
  return <span className={styles.productDescription}>{titleProduct}</span>;
};

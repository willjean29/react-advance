import { useContext } from "react";
import styles from "../styles/styles.module.css";
import ImageNotFound from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let image: string;
  if (img) {
    image = img;
  } else {
    image = product.img ? product.img : ImageNotFound;
  }
  return <img className={styles.productImg} src={image} alt="Product" />;
};

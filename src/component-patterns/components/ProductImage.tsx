import { CSSProperties, useContext } from "react";
import styles from "../styles/styles.module.css";
import ImageNotFound from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className = "", style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  let image: string;
  if (img) {
    image = img;
  } else {
    image = product.img ? product.img : ImageNotFound;
  }
  return <img className={`${styles.productImg} ${className}`} src={image} alt="Product" style={style} />;
};

import styles from "../styles/styles.module.css";
import ImageNotFound from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext, useContext } from "react";

interface ProductProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
}
const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

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

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  const titleProduct = title ? title : product.title;
  return <span className={styles.productDescription}>{titleProduct}</span>;
};

export const ProductButtons = () => {
  const { counter, increseBy } = useContext(ProductContext);
  return (
    <div className={styles.buttonsContainer}>
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

const ProductCard = ({ product, children }: ProductProps) => {
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

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;

import styles from "../styles/styles.module.css";
import ImageNotFound from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface ProductProps {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

const ProductImage = ({ img = "" }) => {
  return <img className={styles.productImg} src={img ? img : ImageNotFound} alt="Product image" />;
};

const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonsProps {
  counter: number;
  increseBy: (value: number) => void;
}

const ProductButtons = ({ counter, increseBy }: ProductButtonsProps) => {
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

const ProductCard = ({ product }: ProductProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increseBy={increseBy} />
    </div>
  );
};

export default ProductCard;

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

const ProductCard = ({ product }: ProductProps) => {
  const { counter, increseBy } = useProduct();

  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src={product.img ? product.img : ImageNotFound} alt="Coffe Mug" />
      {/* <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" /> */}

      <span className={styles.productDescription}>{product.title}</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

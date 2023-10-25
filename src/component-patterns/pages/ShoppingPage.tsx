import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components";
import "../styles/custom-style.css";
import { products } from "../data/products";
import { useShopping } from "../hooks/useShopping";

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShopping();
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product, index) => (
          <ProductCard className="bg-dark" product={product} key={index} onChange={onProductCountChange} value={shoppingCart[product.id]?.count || 0}>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="bg-dark"
            product={product}
            style={{
              width: "100px",
            }}
            key={key}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;

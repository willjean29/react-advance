import ProductCard from "../components/ProductCard";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

const ShoppingPage = () => {
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
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default ShoppingPage;

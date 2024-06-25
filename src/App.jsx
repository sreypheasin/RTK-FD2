import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  selectAllProducts,
  fetchProducts
} from "./redux/feature/product/productSlice";
import { useEffect } from "react";
import { ProductCard } from "./components/common/cards/ProductCard";

function App() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1 className="text-3xl text-blue-800 font-bold text-center">
        Our Product
      </h1>
      <section className=" grid grid-cols-1 md:grid-cols-3  gap-5 px-20 mt-5">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              image={product.image}
              title={product.name}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

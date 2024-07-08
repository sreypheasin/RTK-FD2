import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  selectAllProducts,
  fetchProducts
} from "./redux/features/product/productSlice";
import { useEffect } from "react";
import { ProductCard } from "./components/common/cards/ProductCard";

function App() {
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  console.log("products", products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(import.meta.env.VITE_APP_BASE_URL);
  return (
    <>
      <h1 className="text-3xl text-blue-800 font-bold text-center">
        Our Product
      </h1>
      <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 px-20 mt-5">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              image={product.image}
              title={product.name}
              price={product.price}
              desc={product.desc}
              id={product.id}
              qty={1}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "./redux/feature/product/productSlice";

function App() {
  const dispatch = useDispatch();
  // const products = useSelector(selectAllProducts());
  const products = useSelector((state) => state?.product.products);
  console.log("products", products);

  useEffect(() => {
    console.log("called");
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 text-center">Products</h1>
      {products?.map((product, index) => {
        return <button key={index}></button>;
      })}
    </>
  );
}

export default App;

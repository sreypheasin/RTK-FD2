import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchProducts } from "./redux/feature/product/productSlice";

function App() {
  const dispatch = useDispatch();
  const { products, statue, error } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-800 text-center">Products</h1>
    </>
  );
}

export default App;

import React from "react";
import { ProductListCard } from "../../components/common/cards/ProductListCard";
import { useSelector } from "react-redux";
// import { selectCartItems } from "../../redux/feature/cart/CartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state?.cart.cartItems);
  console.log("cart item", cartItems);
  return (
    <section className="flex justify-center ">
      <div className="max-w-sm w-1/2 bg-slate-50 p-5 rounded-md">
        <div className="flex justify-end">
          <button className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            View all
          </button>
        </div>
        <ProductListCard />
      </div>
    </section>
  );
}

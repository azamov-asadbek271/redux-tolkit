import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./componentss/Navbar";
import ProductsList from "./componentss/ProductsList";
import { calculateTotal } from "./features/products/ProducrsSlice";
import { useSelector } from "react-redux";

function App() {
  const { price } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [price]);
  return (
    <div className="max-w-6xl mx-auto ">
      <Navbar />
      <h2 className="p-3 mb-10 text-2xl">{price} $</h2>
      <ProductsList />
    </div>
  );
}

export default App;

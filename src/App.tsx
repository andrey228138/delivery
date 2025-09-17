import Header from "./component/Header/Header";
import { Routes, Route } from "react-router-dom";
import Cart from "./page/Cart/Cart";
import Home from "./page/Home/Home";
import NotFound from "./page/NotFound/NotFound";
import {  useState } from "react";
import Footer from "./component/Footer/Footer";
import type { IBasket } from "./types";

function App() {
  const [food, setFood] = useState<string>("pizza");
  const [basketFood, setBasketFood] = useState<IBasket[]>([]);



  const removeFromBasket = (index: number) => {
    setBasketFood((prev) => prev.filter((_, i) => i !== index));
  };
  const incQty = (index: number) => {
    setBasketFood((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: (item.quantity ?? 1) + 1 } : item
      )
    );
  };
  const decQty = (index: number) => {
    setBasketFood((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const q = (item.quantity ?? 1) - 1;
        return { ...item, quantity: Math.max(q, 1) };
      })
    );
  };

  return (
    <>
      <Header
        setFood={setFood}
        basketFood={basketFood}
        removeFromBasket={removeFromBasket}
        incQty={incQty}
        decQty={decQty}
      />
      <Routes>
        <Route
          path="/"
          element={<Home foodType={food} setBasketFood={setBasketFood} />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

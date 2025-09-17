import React from "react";

import Stocks_swiper from "../../component/Home/Stocks-swiper/Stocks-swiper";
import New from "../../component/Home/New/New";
import Food from "../../component/Home/Food/Food";
import Stocks from "../../component/Home/Stocks/Stocks";
import Delivery from "../../component/Home/Delivery/Delivery";
import type { IBasket } from "../../types";
interface HomeProps{
  foodType:string,
setBasketFood:React.Dispatch<React.SetStateAction<IBasket[]>>
}
export default function Home({ foodType,setBasketFood }:HomeProps) {
  return (
    <>
      <div >
       
          <Stocks_swiper />
          <New />
          <Food foodType={foodType} setBasketFood={setBasketFood} />
          <Stocks />
          <Delivery />
      
      </div>
    </>
  );
}

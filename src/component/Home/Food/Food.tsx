import React from "react";
import Food_render from "./Food_render";
import styles from "./Food.module.scss";
import type { IBasket } from "../../../types";
interface FoodProps{
setBasketFood:React.Dispatch<React.SetStateAction<IBasket[]>>
foodType:string
}
export default function Food({ foodType,setBasketFood }:FoodProps) {
  return (
    <>
      <div className={styles.food}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>Пицца</h2>
            <ul>
              <Food_render foodType={foodType} setBasketFood={setBasketFood} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

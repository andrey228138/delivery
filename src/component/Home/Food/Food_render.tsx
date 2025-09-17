import React, { useEffect, useState } from "react";
import Food_Skeleton from "./Food_Skeleton";
import type { IBasket } from "../../../types";
interface Product {
  description: string;
  name: string;
  price: number;
  image?: string;
}

interface FoodRenderProps {
  setBasketFood:React.Dispatch<React.SetStateAction<IBasket[]>>
  foodType: string;
}

export default function Food_render({
  foodType,
  setBasketFood,
}: FoodRenderProps) {
  const [data, SetData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    food();
  }, [foodType]);

  async function food() {
    try {
      const response = await fetch(
      "https://68caa4c1430c4476c34a541f.mockapi.io/products?food=" + foodType
   
      );
      const products: Product[] = await response.json();
      SetData(products);
    
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  function addBasket(
    image: string,
    name: string,
    description: string,
    price: number
  ) {
    const newItem:IBasket ={image, name, description, price} 
    setBasketFood(prev=>[...prev, newItem]);
   
  }

  return (
    <>
      {isLoading
        ? [...Array(8)].map((_, index) => <Food_Skeleton key={index} />)
        : data.map((option, index) => (
            <li key={index}>
              <img src={option.image} alt={option.name} />
              <h3>{option.name}</h3>
              <p>{option.description}</p>
              <div>
                <p>от {option.price} ₽</p>{" "}
                <button
                  onClick={() =>
                    addBasket(
                      option.image || "",
                      option.name,
                      option.description,
                      option.price
                    )
                  }
                >
                  В корзину
                </button>
              </div>
            </li>
          ))}
    </>
  );
}

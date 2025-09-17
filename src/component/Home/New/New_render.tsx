import React, { useState, useEffect } from "react";
import New_Skeleton from "./New_Skeleton";
interface Product {
  name: string;
  price: number;
  image?: string;
}

export default function New_food() {
  const [data, SetData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    food();
  }, []);

  async function food() {
    try {
      const response = await fetch(
        "https://68caa4c1430c4476c34a541f.mockapi.io/products?new=true"
      );
      const products: Product[] = await response.json();
      const randomProducts = getRandomProducts(products, 3);
      SetData(randomProducts);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  function getRandomProducts(products: Product[], count: number): Product[] {
    if (products.length <= count) return products;

    const shuffled = [...products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  return (
    <>
      {isLoading
        ? [...Array(data.length)].map((_, index) => (
            <New_Skeleton key={index} />
          ))
        : data.map((option, index) => (
            <li key={index}>
              <img src={option.image} alt={option.name} />
              <div>
                <p>{option.name}</p>
                <p>от {option.price} ₽</p>
              </div>
            </li>
          ))}
    </>
  );
}

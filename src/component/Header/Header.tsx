import React, { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../../img/logo.svg";
import Yandex from "../../img/yandex.png";
import Star from "../../img/star.svg";
import Close from "../../img/close.svg";
import type { IBasket } from "../../types";

interface IHeaderProps {
  setFood: (food: string) => void;
  basketFood: IBasket[];
  removeFromBasket: (index: number) => void;
  incQty: (index: number) => void;
  decQty: (index: number) => void;
}

export default function Header({
  setFood,
  basketFood,
  removeFromBasket,
  incQty,
  decQty,
}: IHeaderProps) {
  const [isActive, setIsActive] = useState(false);

  const toNumber = (v: number | string): number => {
    if (typeof v === "number") return v;
    const cleaned = v
      .toString()
      .replace(/\s/g, "")
      .replace(/[^\d.,-]/g, "")
      .replace(",", ".");
    const num = parseFloat(cleaned);
    return Number.isFinite(num) ? num : 0;
  };

  const fullPrice = basketFood.reduce((total, item) => {
    const qty = item.quantity ?? 1;
    return total + toNumber(item.price) * qty;
  }, 0);

  const handleFoodChange = (type: string) => {
    setFood(type);
  };

  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <div className={styles.left}>
                <div className={styles.logo}>
                  <img src={Logo} alt="Логотип" />
                </div>
                <div className={styles.info}>
                  <p>
                    Доставка пасты <span>Москва</span>
                  </p>
                  <div>
                    <div>
                      <img src={Yandex} alt="Яндекс" />
                      <p>Яндекс еда</p> <div className={styles.circle}></div>
                      <div className={styles.rating}>
                        <p>4.8</p>
                        <img src={Star} alt="Рейтинг" />
                      </div>
                    </div>
                    <div>
                      <p>Время доставки</p>
                      <div className={styles.circle}></div>
                      <p>от 31 мин</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <button>Заказать звонок</button>
                <p>8 499 391-84-49</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <ul className={styles.left}>
                <li onClick={() => handleFoodChange("pizza")}>Пицца</li>
                <li onClick={() => handleFoodChange("drink")}>Напитки</li>
                <li onClick={() => handleFoodChange("dessert")}>Десерты</li>
                <li>Акции</li>
                <li onClick={() => handleFoodChange("combo")}>Комбо</li>
                <li>Контакты</li>
              </ul>

              <div className={styles.right}>
                <p className={styles.sign_up}>Войти</p>
                <div className={styles.popUp}>
                  <button onClick={() => setIsActive(!isActive)}>
                    <p>Корзина</p> <p>{basketFood.length}</p>
                  </button>

                  <div
                    className={`${styles.content} ${
                      isActive ? ""  : styles.active
                    }`}
                  >
                    <ul>
                      {basketFood?.length > 0 ? (
                        basketFood.map((food, index) => {
                          const qty = food.quantity ?? 1;
                          const linePrice = toNumber(food.price) * qty;
                          return (
                            <li key={index}>
                              <img src={food.image} alt={food.name} />
                              <div>
                                <p>{food.name}</p>
                                <div className={styles.qty}>
                                  <button onClick={() => decQty(index)}>
                                    -
                                  </button>
                                  <p>{qty}</p>
                                  <button onClick={() => incQty(index)}>
                                    +
                                  </button>
                                </div>
                              </div>
                              <div className={styles.lineRight}>
                                <button
                                  type="button"
                                  className={styles.removeBtn}
                                  title="Удалить из корзины"
                                  onClick={() => removeFromBasket(index)}
                                >
                                  <img src={Close} alt="Удалить" />
                                </button>
                                <p>{`${linePrice} ₽`}</p>
                              </div>
                            </li>
                          );
                        })
                      ) : (
                        <li className={styles.notFound}>
                          Вы еще ничего не заказали
                        </li>
                      )}
                    </ul>

                    <div className={styles.total}>
                      <p>Сумма заказа</p>
                      <p>{`${fullPrice} ₽`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

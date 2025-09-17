import React from "react";
import styles from "./Stocks.module.scss";
import Cake_stocks from "../../../img/cake-stocks.png";
export default function Stocks() {
  return (
    <>
      <div className={styles.stocks}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>
              Наши <span>акции</span>
            </h2>
            <div>
              <div className={styles.left}>
                <img src={Cake_stocks} alt="" />
              </div>
              <ul className={styles.right}>
                <li>
                  <img src={Cake_stocks} alt="" />
                </li>
                <li>
                  <img src={Cake_stocks} alt="" />
                </li>{" "}
                <li>
                  <img src={Cake_stocks} alt="" />
                </li>{" "}
                <li>
                  <img src={Cake_stocks} alt="" />
                </li>
              </ul>
            </div>
            <button>Все акции</button>
          </div>
        </div>
      </div>
    </>
  );
}

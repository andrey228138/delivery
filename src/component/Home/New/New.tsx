import React from "react";
import styles from "./New.module.scss";
import New_food from "./New_render";
export default function New() {





  return (
    <>
      <div className={styles.new}>
        <div className="container">
          <div className={styles.wrapper}>
           <h2>Новинки</h2>
      
        <ul>
             <New_food/>
        </ul>
        </div>
       </div>
      </div>
    </>
  );
}

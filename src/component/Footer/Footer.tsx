import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../img/logo.svg";
import img_1 from "../../img/Footer_1.svg";
import img_2 from "../../img/Footer_2.svg";
import img_3 from "../../img/Footer_3.svg";
import messenger_img_1 from "../../img/messenger_Footer_1.png";
import messenger_img_2 from "../../img/messenger_Footer_2.png";
import messenger_img_3 from "../../img/messenger_Footer_3.png";
import messenger_img_4 from "../../img/messenger_Footer_4.png";
import messenger_img_5 from "../../img/messenger_Footer_5.png";
import messenger_img_6 from "../../img/messenger_Footer_6.png";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <img src={logo} alt="" />
              <div>
                <p>Калорийность и состав</p>
                <p>Правовая информация</p>
              </div>
              <p>Мы в соцсетях</p>
              <div>
                <ul>
                  <li>
                    <p>YouTube</p>
                    <p>Instagram</p>
                  </li>
                  <li>
                    <p>Facebook</p>
                    <p>ВКонтакте</p>
                  </li>
                  <li>
                    <p>Москва ул. Проспект Вернадского 86В</p>
                  </li>
                </ul>
              </div>
              <div>
                <p>YaBao Все праав защищены © 2021</p>{" "}
                <ul>
                  <li>
                    <img src={img_1} alt="" />
                  </li>
                  <li>
                    <img src={img_2} alt="" />
                  </li>
                  <li>
                    <img src={img_3} alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.right}>
              <p>Остались вопросы? А мы всегда на связи:</p>
              <div>
                <ul>
                  <li>
                    <img src={messenger_img_1} alt="" />
                  </li>
                   <li>
                    <img src={messenger_img_2} alt="" />
                  </li>
                   <li>
                    <img src={messenger_img_3} alt="" />
                  </li>
                   <li>
                    <img src={messenger_img_4} alt="" />
                  </li>
                   <li>
                    <img src={messenger_img_5} alt="" />
                  </li>
                   <li>
                    <img src={messenger_img_6} alt="" />
                  </li>
                  <li>написать нам</li>
                </ul>
              
              </div>
             <h3>8 499 391-84-49</h3>
             <button>Заказать звонок</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./Delivery.module.scss";
import delivery_1 from "../../../img/delivery_1.png";
import delivery_2 from "../../../img/delivery_2.png";
import delivery_3 from "../../../img/delivery_3.png";
import delivery_4 from "../../../img/delivery_4.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function Delivery() {
  return (
    <>
      <div className={styles.delivery}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>Оплата и доставка</h2>
            <ul>
              <li>
                <div>
                  <img src={delivery_1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </li>
              <li>
                <div>
                  <img src={delivery_1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </li>
              <li>
                <div>
                  <img src={delivery_1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </li>
              <li>
                <div>
                  <img src={delivery_1} alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </li>
            </ul>
            <MapContainer
              center={[50.29660352942201, 127.5409349768969]}
              zoom={13}
              style={{ height: "332px", width: "100%" }} 
              className={styles.map}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[50.29660352942201, 127.5409349768969]}
              ></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
}

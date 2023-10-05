import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={props.src} className={styles.img} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{props.title}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi.{" "}
        </p>
      </div>
      <div className={styles.footer}>
        <p className={styles.tag}>{props.tags}</p>
        <Link to="/gamepage">
          <button className={styles.action}>Get started </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

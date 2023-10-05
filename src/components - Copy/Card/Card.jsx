import React from "react";
import styles from "./Card.module.css";

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
                <button className={styles.action}>
                    Get started{" "}
                </button>
            </div>
        </div>
    );
};

export default Card;

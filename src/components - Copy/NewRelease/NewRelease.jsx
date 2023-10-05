import React from "react";
import styles from "./NewRelease.module.css";
import Card from "../Card/Card";
import Game from "../../assets/game.jpg"

const NewRelease = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>New Releases</h1>
      </div>
      <div className={styles.row}>
        <Card title="Game Name" tags="Action" src={Game} />
        <Card title="Game Name" tags="Action" src={Game}/>
        <Card title="Game Name" tags="Action" src={Game}/>
        <Card title="Game Name" tags="Action" src={Game}/>
      </div>
      <div className={styles.next}>
        More
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default NewRelease;

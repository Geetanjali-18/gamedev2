import React from "react";
import styles from "./NewRelease.module.css";
import Card from "../Card/Card";
import Game from "../../assets/game.jpg";
import coro2 from "../../assets/coro2.jpg";
import coro1 from "../../assets/coro1.jpg";

const NewRelease = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>New Releases</h1>
      </div>
      <div className={styles.row}>
        <Card
          title="God of War"
          tags="Action Sci-fi"
          src={coro2}
          details="God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio."
        />
        <Card
          title="Cyberpunk 2077"
          tags="Action Sci-fi"
          src={Game}
          details="A futuristic open-world RPG from the creators of The Witcher series."
        />
        <Card
          title="Among Us"
          tags="Real World"
          src={coro1}
          details="A social deduction game where players work together on a spaceship but some are impostors."
        />
        <Card
          title="Genshin Impact"
          tags="Role Play"
          src={Game}
          details="An action RPG with an open world and elemental combat."
        />
      </div>
      <div className={styles.next}>
        More
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default NewRelease;
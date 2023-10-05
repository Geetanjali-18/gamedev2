import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Copyright © 2023 Rupublic Of Gamer (ROG). Designed By{" "}
          <a href="#">Team Unstoppable</a>
        </p>
      </div>
      <div className={styles.handles}>
        <a href="#">
            <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <FontAwesomeIcon className="h1" icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="h1" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
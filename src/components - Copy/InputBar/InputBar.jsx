import React from "react";
import styles from "./InputBar.module.css";
import { Send } from "react-feather";


const InputBar = () => {
  return (
    <div className={styles.footer}>
      <input
        placeholder="Type here..."
        value={messageText}
        onChange={(event) => setMessageText(event.target.value)}
        // onKeyUp={(event) => (event.key === "Enter" ? handleSubmission() : "")}
      />
      <div className={styles.btn}>
        <div className={styles.icon}>
          <Send />
        </div>
      </div>
    </div>
  );
};

export default InputBar;

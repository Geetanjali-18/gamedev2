import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";

import InputControl from "../../components/InputControl/InputControl";

const SignUp = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerBox}>
          <h1 className={styles.heading}>Signup</h1>
          <InputControl label="Name" placeholder="Enter your name" />
          <InputControl label="Email" placeholder="Enter email address" />
          <InputControl label="Password" placeholder="Enter password" />

          <div className={styles.footer}>
            <button>Signup</button>
            <p>
              Already have an account?{" "}
              <span>
                <a>Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

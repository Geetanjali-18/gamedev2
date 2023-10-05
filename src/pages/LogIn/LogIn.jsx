import React, { useEffect, useState } from "react";
import InputControl from "../../components/InputControl/InputControl";
import styles from "./LogIn.module.css";
import { Link } from "react-router-dom";


const LogIn = () => {
  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.innerBox}>
            <h1 className={styles.heading}>Login</h1>

            <InputControl
              label="Email"
              placeholder="Enter email address"
            />
            <InputControl
              label="Password"
              placeholder="Enter Password"
            />

            <div className={styles.footer}>
              <Link to = "/dashboard"><button
              >
                Login
              </button></Link>
              <p>
                Don't have an account?{" "}
                <span>
                  <a>Sign up</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;

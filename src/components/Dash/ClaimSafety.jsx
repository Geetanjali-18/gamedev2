import React from "react";
import "./ClaimSafety.css";

const ClaimSafety = (props) => {
  const displayIfbudget = (budget, profit) => {
    if (budget > profit) {
      return "Close";
    } else {
      return "Claim";
    }
  };
  const displayParaUp = (budget, profit) => {
    if (budget > profit) {
      return "Your can't claim";
    } else {
      return "Your can claim";
    }
  };
  return (
    <div className="claimSafetyDiv">
      <h1>You are not able to earn as much your budget so...</h1>
      <p>{displayParaUp(500, 6000)}</p>
      <button className="btn">{displayIfbudget(500, 6000)}</button>
    </div>
  );
};

export default ClaimSafety;

import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", onClick, ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...delegated}
    />
  );
}

export default Button;

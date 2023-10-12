import React from "react";
import styles from "./Button.module.css";

const Button = ({name, color}) => {

    return <>
        <button className={`${styles.button} ${styles[color]}`}>{name}</button>
    </>
}

export default Button;
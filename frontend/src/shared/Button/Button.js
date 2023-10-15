import React from "react";
import styles from "./Button.module.css";

const Button = ({value, action = () => {}, color = 'blue'}) => {

    return <>
        <button onClick={() => action()} className={`${styles.button} ${styles[color]}`}>
            {value}
        </button>
    </>
}

export default Button;
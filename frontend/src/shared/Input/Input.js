import React from "react";
import styles from "./Input.module.css";
import Button from "../Button/Button";

const Input = ({placeholder}) => {
    return <div className={styles.container}>
        <input placeholder={placeholder} className={styles.input}/>
        <Button name="Search" color="blue" />
    </div>
}

export default Input;
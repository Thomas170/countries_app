import React from "react";
import styles from "./Input.module.css";

const Input = ({placeholder, changeValue}) => {

    const handleInputChange = (event) => {
        const { value } = event.target;
        changeValue(value);
    };

    return <div className={styles.container}>
        <input
            onChange={handleInputChange}
            placeholder={placeholder}
            className={styles.input}
        />
    </div>
}

export default Input;
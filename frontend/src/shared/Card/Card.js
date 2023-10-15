import React from "react";
import styles from "./Card.module.css";

const Card = ({children, color = 'gray'}) => {

    return <div className={`${styles.container} ${styles[color]}`} data-testid="test-card">
        {children}
    </div>
}

export default Card;
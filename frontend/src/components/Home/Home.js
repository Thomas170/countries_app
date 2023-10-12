import React from "react";
import styles from "./Home.module.css";
import Input from "../../shared/Input/Input";

const Home = () => {
    return <>
        <header>
            <h1>Countries App</h1>
        </header>
        <div className={styles.container}>
            <p>Enter the name of a country !</p>
            <Input className={styles.input} placeholder="Type a country" />
        </div>
    </>
}

export default Home;
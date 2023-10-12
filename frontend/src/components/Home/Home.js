import React from "react";
import styles from "./Home.module.css";

const Home = () => {
    return <>
        <header>
            <h1>Countries App</h1>
        </header>
        <div className={styles.container}>
            <p>Enter the name of a country !</p>
        </div>
    </>
}

export default Home;
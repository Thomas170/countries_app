import React, {useEffect} from "react";
import styles from "./Home.module.css";
import Input from "../../shared/Input/Input";
import {getCountryDetails} from "../../services/CountryService";

const Home = () => {
    const search = () => {
        getCountryDetails('france').then(response => {
            console.log('response', response.data)
        }).catch(error => {
            console.error('API request failed:', error);
        });
    }

    useEffect( () => {
        search();
    }, []);

    return <>
        <header>
            <h1>Countries App</h1>
        </header>
        <div className={styles.container}>
            <p>Enter the name of a country !</p>
            <Input placeholder="Type a country" />
        </div>
    </>
}

export default Home;
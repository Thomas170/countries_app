import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import Input from "../../shared/Input/Input";
import {getCountryDetails} from "../../services/CountryService";
import CountryDetails from "../CountryDetails/CountryDetails";
import Loader from "../../shared/Loader/Loader";

const Home = () => {
    const [countryDetails, setCountryDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const search = () => {
        getCountryDetails('france').then(response => {
            console.log('response', response.data)
            setCountryDetails(response.data);
        }).catch(error => {
            console.error('API request failed:', error);
        });
    }

    useEffect(() => {
        search();
    }, []);

    return <>
        <header>
            <h1>Countries App</h1>
        </header>
        <div className={styles.container}>
            <p>Enter the name of a country !</p>
            <Input placeholder="Type a country" />
            {!loading && <Loader />}
            <CountryDetails details={countryDetails} />
        </div>
    </>
}

export default Home;
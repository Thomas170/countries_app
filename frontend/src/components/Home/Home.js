import React, {useState} from "react";
import styles from "./Home.module.css";
import {getCountryDetails} from "../../services/CountryService";
import CountryDetails from "../CountryDetails/CountryDetails";
import Loader from "../../shared/Loader/Loader";
import SearchBar from "../../shared/SearchBar/SearchBar";

const Home = () => {
    const [countryName, setCountryName] = useState(null);
    const [countryDetails, setCountryDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const search = () => {
        setError(null);
        setCountryDetails(null);
        setLoading(true);

        getCountryDetails(countryName).then(response => {
            setLoading(false);
            setCountryDetails(response.data);
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 404) {
                setError('Didn\'t found the country. Are you sure the name is correct ?');
            } else {
                setError('API request failed.');
            }
        });
    }

    return <>
        <header>
            <h1>Countries App</h1>
        </header>
        <div className={styles.container}>
            <p>Enter the name of a country !</p>

            <SearchBar
                changeValue={(value) => { setCountryName(value) }}
                placeholder="Type a country"
                search={() => { search() }}
            />

            <>
                {loading && <Loader />}
                {error && <p className={styles.error}>{error}</p>}
                {countryDetails && <CountryDetails details={countryDetails} />}
            </>
        </div>
    </>
}

export default Home;
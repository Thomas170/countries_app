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
        setCountryDetails(null);
        setError(null);

        if (!countryName) {
            setError('You need to enter the name of a country.');
        } else {
            setLoading(true);

            getCountryDetails(countryName).then(response => {
                setLoading(false);
                setCountryDetails(response);
            }).catch(error => {
                setLoading(false);
                if (error?.response?.status === 404) {
                    setError('Didn\'t found the country. Are you sure the name is correct ?');
                } else {
                    setError('API request failed.');
                }
            });
        }
    }

    return <>
        <header>
            <h1 className={styles.title}>Countries App</h1>
            <div className="custom-shape-divider-top-1697303559">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </header>
        <div className={styles.container}>
            <p className={styles.description}>You want to know everything about a country? It has never been so simple!</p>

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
import React from "react";
import styles from "./CountryDetails.module.css";

const CountryDetails = ({details}) => {
    return <>
        <p className={styles.name}>name: {details?.name?.common}</p>
    </>
}

export default CountryDetails;
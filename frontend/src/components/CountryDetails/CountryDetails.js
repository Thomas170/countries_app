import React from "react";
import styles from "./CountryDetails.module.css";
import LocationDetails from "./LocationDetails/LocationDetails";
import CapitalAndPopulationDetails from "./CapitalAndPopulationDetails/CapitalAndPopulationDetails";
import OtherInfoDetails from "./OtherInfoDetails/OtherInfoDetails";

const CountryDetails = ({details}) => {

    return <div className={styles.container}>
        <h3 className={styles.name}>{details?.name}</h3>

        <LocationDetails details={details} />

        <CapitalAndPopulationDetails details={details} />

        <OtherInfoDetails details={details} />

    </div>
}

export default CountryDetails;
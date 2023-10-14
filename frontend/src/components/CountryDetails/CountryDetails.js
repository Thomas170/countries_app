import React from "react";
import styles from "./CountryDetails.module.css";
import LocationDetails from "./DetailsElements/LocationDetails/LocationDetails";
import CapitalAndPopulationDetails from "./DetailsElements/CapitalAndPopulationDetails/CapitalAndPopulationDetails";
import LanguagesDetails from "./DetailsElements/LanguagesDetails/LanguagesDetails";
import CurrenciesDetails from "./DetailsElements/CurrenciesDetails/CurrenciesDetails";
import CarDetails from "./DetailsElements/CarDetails/CarDetails";
import StartOfWeekDetails from "./DetailsElements/StartOfWeekDetails/StartOfWeekDetails";

const CountryDetails = ({details}) => {

    return <div className={styles.container}>
        <h3 className={styles.name}>{details?.name}</h3>

        <LocationDetails details={details} />

        <CapitalAndPopulationDetails details={details} />

        <LanguagesDetails details={details} />

        <CurrenciesDetails details={details} />

        <CarDetails details={details} />

        <StartOfWeekDetails details={details} />
    </div>
}

export default CountryDetails;
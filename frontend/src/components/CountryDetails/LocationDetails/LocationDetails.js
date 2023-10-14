import React from "react";
import styles from "./LocationDetails.module.css";
import parentStyles from "./../CountryDetails.module.css";

const LocationDetails = ({details}) => {

    return <>
        <p className={parentStyles.title}>Location</p>

        <a className={styles.map} href={details?.map} target="_blank" rel="noopener noreferrer">You can see the map of the country on Google Maps</a>

        <img className={styles.flag} src={details?.flag} alt='flag' />

        <div className={styles.centeredContainer}>
            <div>
                <p className={styles.value}>{details?.region}</p>
                <p>Region of the country</p>
            </div>
            <div>
                <p className={styles.value}>{details?.location?.latitude}°’N, {details?.location?.longitude}°’E</p>
                <p>Position (latitude, longitude)</p>
            </div>
            <div>
                <p className={styles.value}>{details?.area}</p>
                <p>Total area in km2</p>
            </div>
        </div>
    </>
}

export default LocationDetails;
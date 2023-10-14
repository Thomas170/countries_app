import React from "react";
import styles from "./LocationDetails.module.css";
import parentStyles from "../../CountryDetails.module.css";

const LocationDetails = ({details}) => {

    return <>
        <p className={parentStyles.title}>Location</p>
        <p className={parentStyles.description}>
            If you want to know the location of the country, you can see on Google Maps:{' '}
            <a href={details?.map} target="_blank" rel="noopener noreferrer"><strong>Click here to see the map !</strong></a>
            <br/>During your visit, you'll have the opportunity to see and learn about the national flag of the country you're in.
            Flags hold significant cultural and historical importance and can convey a deep sense of identity and heritage.
            To appreciate the symbolism and significance of the local flag, it's worthwhile to explore its history and meaning.
            This will allow you to engage more meaningfully with the local culture and better understand the pride and values associated with the flag of this nation.
        </p>
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
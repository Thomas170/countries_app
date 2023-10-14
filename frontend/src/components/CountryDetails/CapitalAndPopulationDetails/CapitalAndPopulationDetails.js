import React from "react";
import styles from "./CapitalAndPopulationDetails.module.css";
import Card from "../../../shared/Card/Card";

const CapitalAndPopulationDetails = ({details}) => {

    return <div className={styles.container}>
        <Card>
            <div className={styles.cardContainer}>
                <p className={styles.cardTitle}>Capital</p>
                <p className={styles.subCardTitle}>{details?.capital}</p>
                <p className={styles.detailValue}>Position: {details?.capitalLocation.latitude}°’N, {details?.capitalLocation.longitude}°’E</p>
            </div>
        </Card>
        <Card>
            <div className={styles.cardContainer}>
                <p className={styles.cardTitle}>Population</p>
                <p className={styles.subCardTitle}>{details?.demonym} people</p>
                <p className={styles.detailValue}>Number: {details?.population} people</p>
            </div>
        </Card>
    </div>
}

export default CapitalAndPopulationDetails;
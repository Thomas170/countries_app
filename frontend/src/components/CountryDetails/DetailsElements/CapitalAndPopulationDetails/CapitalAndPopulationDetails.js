import React from "react";
import styles from "./CapitalAndPopulationDetails.module.css";
import Card from "../../../../shared/Card/Card";

const CapitalAndPopulationDetails = ({details}) => {

    return <div className={styles.container}>
        <Card>
            <div className={styles.cardContainer}>
                <p className={styles.cardTitle}>Capital</p>
                <p className={styles.detailValue}>
                    The capital{details?.capital?.length > 1 ? 's' : ''} of the country {details?.capital?.length > 1 ? 'are' : 'is'}
                    {details?.capital?.map((capital, index) => (
                        <strong key={index}> {capital}{index + 1 < details?.capital?.length ? ', ' : ''}</strong>
                    ))}.
                    It is the city which occupies the first rank in a state, a province: it is the seat of government.
                    Here is its position:
                </p>
                <p className={styles.detailValue}><strong>{details?.capitalLocation.latitude}°’N,{' '}
                    {details?.capitalLocation.longitude}°’E</strong></p>
            </div>
        </Card>
        <Card>
            <div className={styles.cardContainer}>
                <p className={styles.cardTitle}>Population</p>
                <p className={styles.detailValue}>
                    The inhabitants of this country, who are all the people living in the country, are called{' '}
                    <strong>{details?.demonym}</strong>.
                    Here is the total number of inhabitants of the country:
                </p>
                <p className={styles.detailValue}><strong>{details?.population}</strong> people</p>
            </div>
        </Card>
    </div>
}

export default CapitalAndPopulationDetails;
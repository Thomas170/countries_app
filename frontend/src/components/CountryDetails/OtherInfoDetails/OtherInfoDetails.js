import React from "react";
import styles from "./OtherInfoDetails.module.css";
import parentStyles from "./../CountryDetails.module.css";
import Card from "../../../shared/Card/Card";

const OtherInfoDetails = ({details}) => {

    return <>
        <p className={parentStyles.title}>Other information</p>

        <div className={styles.elementContainer}>
            <p className={styles.titleElement}>Languages:</p>
            <div className={styles.list}>
                {details?.languages?.map((language, index) => (
                    <Card key={index}>
                        <div className={`${styles.cardContainer} ${styles.yellow}`}>{language}</div>
                    </Card>
                ))}
            </div>
        </div>

        <div className={styles.elementContainer}>
            <p className={styles.titleElement}>Currencies:</p>
            <div className={styles.list}>
                {details?.currencies?.map((currency, index) => (
                    <Card key={index}>
                        <div className={`${styles.cardContainer} ${styles.purple}`}>{currency?.symbol}</div>
                    </Card>
                ))}
            </div>
        </div>

        <div className={styles.elementContainer}>
            <p className={styles.titleElement}>Car:</p>
            <div className={styles.list}>
                <Card>
                    <div className={styles.carContainer}>
                        <p className={styles.carTitle}>Drive side</p>
                        <p className={styles.carValue}>People drive on the {details?.car?.side}</p>
                    </div>
                </Card>
                <Card>
                    <div className={styles.carContainer}>
                        <p className={styles.carTitle}>Signs</p>
                        {details?.car?.signs?.map((sign, index) => (
                            <p key={index} className={styles.carValue}>{sign}{index + 1 < details?.car?.signs?.length ? ', ' : ''}</p>
                        ))}
                    </div>
                </Card>
            </div>
        </div>

        <div className={styles.elementContainer}>
            <p className={styles.titleElement}>Start of the week:</p>
            <p>The first day of the week in this country is <strong>{details?.startOfWeek}</strong></p>
        </div>
    </>
}

export default OtherInfoDetails;
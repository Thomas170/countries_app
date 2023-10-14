import React from "react";
import styles from "./CarDetails.module.css";
import parentStyles from "./../../CountryDetails.module.css";
import Card from "../../../../shared/Card/Card";

const CarDetails = ({details}) => {

    return <>
        <p className={`${parentStyles.title} ${parentStyles.separator}`}>Car</p>
        <div className={parentStyles.elementContainer}>
            <p className={parentStyles.description}>
                During your trip, you may find it necessary to operate a motor vehicle.
                Navigating the roads can be a challenging endeavor,
                particularly if local driving customs differ significantly from those in your home country.
                To help ensure a smooth and safe driving experience,
                it's essential to familiarize yourself with pertinent information about cars and driving practices in this country.
            </p>
            <div className={parentStyles.list}>
                <Card>
                    <div className={styles.carContainer}>
                        <p className={styles.carTitle}>Drive side</p>
                        <p className={styles.carValue}>
                            In this country, driving is on the <strong>{details?.car?.side}</strong>.
                            Be careful if you are not used to it, it can be difficult at first!
                        </p>
                    </div>
                </Card>
                <Card>
                    <div className={styles.carContainer}>
                        <p className={styles.carTitle}>Signs</p>
                        <p className={styles.carValue}>
                            Car signs correspond to a mark referring to the country.
                            They are located on the vehicle license plate.
                            Those of this country are:{' '}
                            {details?.car?.signs?.map((sign, index) => (
                                <span key={index}>
                                    <strong>{sign}</strong>{index + 1 < details?.car?.signs?.length ? ', ' : ''}
                                </span>
                            ))}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </>
}

export default CarDetails;
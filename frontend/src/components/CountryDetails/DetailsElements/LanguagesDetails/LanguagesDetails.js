import React from "react";
import parentStyles from "./../../CountryDetails.module.css";
import Card from "../../../../shared/Card/Card";

const LanguagesDetails = ({details}) => {

    return <>
        <p className={`${parentStyles.title} ${parentStyles.separator}`}>Languages</p>
        <div className={parentStyles.elementContainer}>
            <p className={parentStyles.description}>
                Throughout your journey, you may encounter a diverse array of languages spoken in the region.
                Communication can be both enriching and challenging when languages differ from those you're familiar with.
                To facilitate effective communication and enhance your overall experience,
                it's important to gain some insights into the languages commonly used in this region.
            </p>
            <div className={parentStyles.list}>
                {details?.languages?.map((language, index) => (
                    <Card key={index}>
                        <div className={`${parentStyles.cardContainer} ${parentStyles.yellow}`}>{language}</div>
                    </Card>
                ))}
            </div>
        </div>
    </>
}

export default LanguagesDetails;
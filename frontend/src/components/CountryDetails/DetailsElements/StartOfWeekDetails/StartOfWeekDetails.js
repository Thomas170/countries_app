import React from "react";
import parentStyles from "./../../CountryDetails.module.css";

const StartOfWeekDetails = ({details}) => {

    return <>
        <p className={`${parentStyles.title} ${parentStyles.separator}`}>Start of the week</p>
        <p className={parentStyles.description}>
            The choice of the first day of the week, can vary from one country to another.
            It plays a unique role in shaping the local culture and daily routines.
            To adapt and immerse yourself effectively in this country,
            understanding which day marks the beginning of the week and its cultural significance can be particularly valuable.
            This knowledge can help you plan your activities, work schedules,
            and even appreciate the local customs and traditions associated with the start of the week in this nation.
            <span>The first day of the week in this country is <strong>{details?.startOfWeek}</strong></span>
        </p>
    </>
}

export default StartOfWeekDetails;
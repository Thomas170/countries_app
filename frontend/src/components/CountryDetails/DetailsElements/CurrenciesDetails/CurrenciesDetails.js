import React from "react";
import parentStyles from "./../../CountryDetails.module.css";
import Card from "../../../../shared/Card/Card";

const CurrenciesDetails = ({details}) => {

    return <>
        <p className={`${parentStyles.title} ${parentStyles.separator}`}>Currencies</p>
        <div className={parentStyles.elementContainer}>
            <p className={parentStyles.description}>
                When you travel, you'll likely have to deal with different currencies,
                which can become a complex task if they differ from what you're used to in your home country.
                Here is some important information about the local currencies of this region to facilitate your{' '}
                financial transactions and money management during your trip. For this country, it's:{' '}
                {details?.currencies?.map((currency, index) => (
                    <span key={index}>the <strong > {currency?.name}</strong>{index + 1 < details?.currencies?.length ? ', ' : ''}</span>
                ))}
                .
            </p>
            <div className={parentStyles.list}>
                {details?.currencies?.map((currency, index) => (
                    <Card key={index}>
                        <div className={`${parentStyles.cardContainer} ${parentStyles.blue}`}>{currency?.symbol}</div>
                    </Card>
                ))}
            </div>
        </div>
    </>
}

export default CurrenciesDetails;
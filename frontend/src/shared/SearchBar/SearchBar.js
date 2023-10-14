import React from "react";
import styles from "./SearchBar.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const SearchBar = ({placeholder, changeValue, search}) => {

    return <div className={styles.container}>
        <Input
            changeValue={changeValue}
            placeholder={placeholder}
        />
        <Button
            action={search}
            value='Search'
            color='blue'
        />
    </div>
}

export default SearchBar;
import React from "react";
import { useState } from "react";
import styles from './header.module.css';
import ReactHookFormSelect from "../SelectField/SelectField";
import Search from "../Search/Search";

const Header = ({handleFormSubmit, handleInputChange}) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'all', label: 'All'},
        { value: 'art', label: 'Art'},
        { value: 'biography', label: 'Biography'},
        { value: 'computers', label: 'Computers'},
        { value: 'history', label: 'History'},
        { value: 'medical', label: 'Medical'},
        { value: 'poetry', label: 'Poetry'},
    ]

    
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Search for books</h1>
            <Search 
                onSubmit={handleFormSubmit}
                onInput={handleInputChange} /> 
            <div className={styles.select_wrapper}>
                <div>
                <span>Categories</span>
                <ReactHookFormSelect
                    options = {options}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption} 
                />
                </div>
                <div>
                <span>Sorting by</span>
                <ReactHookFormSelect />
                </div>
                
            </div>
        </header>
    )
}

export default Header

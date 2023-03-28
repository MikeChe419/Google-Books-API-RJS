import React from "react";
import { useState } from "react";
import styles from './header.module.css';
import ReactHookFormSelect from "../SelectField/SelectField";
import Search from "../Search/Search";

const Header = ({handleFormSubmit, handleInputChange}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedSort, setSelectedSort] = useState('relevance')

    const filterOptions = [
        { value: 'all', label: 'All'},
        { value: 'art', label: 'Art'},
        { value: 'biography', label: 'Biography'},
        { value: 'computers', label: 'Computers'},
        { value: 'history', label: 'History'},
        { value: 'medical', label: 'Medical'},
        { value: 'poetry', label: 'Poetry'},
    ]

    const sortOptions = [
        {value: 'relevance', label: 'Relevance'},
        {value: 'newest', label: "Newest"}
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
                    options = {filterOptions}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption} 
                />
                </div>
                <div>
                <span>Sorting by</span>
                <ReactHookFormSelect
                    options={sortOptions}
                    defaultValue={selectedSort}
                    onChange={setSelectedSort} />
                </div>
                
            </div>
        </header>
    )
}

export default Header

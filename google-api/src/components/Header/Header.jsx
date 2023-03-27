import React from "react";
import styles from './header.module.css';
import ReactHookFormSelect from "../SelectField/SelectField";
import Search from "../Search/Search";
import { useState, useCallback } from "react";
import api from "../../utils/api";


const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRequest = useCallback(() => {
        api.getBooks(searchQuery)
         .then((res) => console.log(res))
         .catch(err => console.log(err))
    }, [searchQuery])

    const handleInputChange = useCallback((inputValue) => {
        setSearchQuery(inputValue);
      }, [setSearchQuery])


    const handleFormSubmit = useCallback((inputText) => {
        setSearchQuery(inputText);
        handleRequest();
      }, [setSearchQuery, handleRequest])

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

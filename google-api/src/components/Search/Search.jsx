import React from "react";
import styles from './search.module.css';
import { useCallback, useState, memo } from "react";
import {ReactComponent as SearchIcon} from '../../vendor/ic-search.svg';
import { ReactComponent as CloseIcon } from '../../vendor/ic-close-input.svg';

const Search = ({onSubmit: propsOnSubmit, onInput}) => {

    const [inputText, setInputText] = useState('')

    const handleInput = useCallback((e) => {
        setInputText(e.target.value)
        onInput && onInput(e.target.value)
    }, [setInputText, onInput])

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        propsOnSubmit(inputText)
    }, [propsOnSubmit, inputText])

    const handleClearInput = useCallback((e) => {
        e.stopPropogation()
        setInputText('');
        onInput &&onInput('')
    }, [setInputText, onInput])

    return (
        <form 
            className={styles.search_form} 
            onSubmit={handleFormSubmit}>
            <input 
                className={styles.search_input} 
                type="text"
                value ={inputText}
                onInput = {handleInput} />
            <button type="button" className={styles.search_button}>
                {inputText && <CloseIcon onClick={handleClearInput} className='search__icon-clear' />}
                {inputText && <SearchIcon onClick={handleFormSubmit} className='search__icon' />}
            </button>
        </form>
    ) 
}

export default memo(Search)
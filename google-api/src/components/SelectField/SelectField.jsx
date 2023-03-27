import React from "react";
import Select from 'react-select';
import styles from './selectField.module.css'

const ReactHookFormSelect = ({
    defaultValue, 
    onChange, 
    options,
  }) => {

    return (
      <Select className={styles.select}
        defaultValue = {defaultValue}
        onChange = {onChange}
        options = {options}
    />
    )
}
export default ReactHookFormSelect;
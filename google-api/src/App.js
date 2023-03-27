import './App.css';
import api from './utils/api';
import Header from './components/Header/Header';
import { useState, useCallback } from "react";

function App() {


  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <Header
      handleFormSubmit = {handleFormSubmit}
      handleInputChange = {handleInputChange} />
  );
}

export default App;

import './App.css';
import api from './utils/api';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useCallback, useEffect } from "react";
import { BookContext } from './context/booksContext';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([])

    const handleRequest = useCallback(() => {
        api.getBooks(searchQuery)
         .then((res) => {
          console.log(res)
          setBooks(res.items)
         })
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
      <BookContext.Provider value={{books}}>
        <Header
          handleFormSubmit = {handleFormSubmit}
          handleInputChange = {handleInputChange}>
        </Header>
        <Main/>
      </BookContext.Provider>
  );
}

export default App;

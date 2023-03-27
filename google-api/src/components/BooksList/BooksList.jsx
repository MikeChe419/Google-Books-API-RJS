import styles from './booksList.module.css';
import { useState, useEffect, useContext } from 'react';
import { BookContext } from '../../context/booksContext';
import Book from '../Book/Book';

const BooksList = () => {
    const {books}  = useContext(BookContext)
     return (
    <ul>
        {
            books.map((item ) => <Book key = {item.id} volumeInfo={item.volumeInfo}/>)
        }
    </ul>
       
     )

    
}

export default BooksList
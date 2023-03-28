import styles from './booksList.module.css';
import { useContext } from 'react';
import { BookContext } from '../../context/booksContext';
import Book from '../Book/Book';

const BooksList = () => {
    const {books}  = useContext(BookContext)
     return (
    <ul>
        {
            books.map((item ) => 
            <Book 
                key = {item.id} 
                volumeInfo={item.volumeInfo}
                img = {item.volumeInfo.imageLinks}/>)
        }
    </ul>
       
     )

    
}

export default BooksList
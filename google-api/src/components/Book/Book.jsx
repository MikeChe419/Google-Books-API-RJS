import styles from './book.module.css';

const Book = ({volumeInfo}) => {
 return (
    <li className={styles.book_item}>
        <h3 className={styles.book_title}>{volumeInfo.title}</h3>
    </li>
 )
}
export default Book
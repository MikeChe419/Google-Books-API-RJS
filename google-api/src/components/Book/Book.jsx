import styles from './book.module.css';

const Book = ({volumeInfo, img}) => {
   console.log(volumeInfo.categories) 
 return (
    <li className={styles.book_item}>
        <img src={(!img) ? '' : img.thumbnail} alt="" /> 
        <h3 className={styles.book_title}>{volumeInfo.title}</h3>
    </li>
 )
}
export default Book
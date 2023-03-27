import styles from './main.module.css';
import BooksList from '../BooksList/BooksList';


const Main = () => {
    return (
        <section className={styles.main}>
            Main
            <BooksList />
        </section>
    )
}

export default Main
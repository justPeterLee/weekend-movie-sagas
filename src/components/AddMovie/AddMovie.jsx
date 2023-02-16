import styles from './AddMovie.module.css';

export default function AddMovie(){
    return(
        <div className={styles.container}>
            <button className={styles.circle}>
                <h1 className={styles.plus}>+</h1>
            </button>
        </div>
    )
}


import styles from './AddMovie.module.css';

export default function AddMovie(){
    const showAddMovie = () => {
        
    }
    return(
        <div className={styles.container}>
            <button onClick={showAddMovie} className={styles.circle}>
                <h1 className={styles.plus}>+</h1>
            </button>
        </div>
    )
}


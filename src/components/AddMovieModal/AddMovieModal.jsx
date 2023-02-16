import styles from './AddMovieModal.module.css'
export default function AddMovieModal(){
    return(
        <div className={styles.background}>
            <div className={styles.container}>
                <div>
                    <p>Title</p>
                    <input/>
                </div>
                <div>
                    <p>Genres</p>
                    <input type="checkbox" value="Adventure"/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                    <input type="checkbox" value=""/>
                </div>
                <div>
                    <p></p>
                    <textarea/>
                </div>
            </div>
        </div>
    )
}


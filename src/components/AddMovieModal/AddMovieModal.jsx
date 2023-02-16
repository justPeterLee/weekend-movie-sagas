import styles from './AddMovieModal.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
export default function AddMovieModal(){
    const dispatch = useDispatch();

    const fetchGenre = () => {
        dispatch({type:"FETCH_ALL_GENRE"});
    }

    useEffect(()=>{fetchGenre()},[]);
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
                <div>
                    <button>add movie</button>
                    <button>cancel</button>
                </div>
            </div>
        </div>
    )
}


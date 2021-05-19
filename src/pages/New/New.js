import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import { AuthContext } from '../../context/AuthContext';
import styles from './New.module.css';

function New() {
    const [setCountries] = useState([]);
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setError("");
            toggleLoading(true);

            try {
                const response = await axios.get(
                    // 'https://unogsng.p.rapidapi.com/titlecountries',
                    {
                        params: {netflixid: '81043135'},
                        headers: {
                            "x-rapidapi-key":
                                "5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9",
                            "x-rapidapi-host": "unogsng.p.rapidapi.com",
                        },
                    }
                );
                console.log('RESPONSE', response)
                setCountries(response.data.results);

            } catch (e) {
                setError("Er is iets mis gegaan bij het ophalen van de data 😢");
                console.error(e);
            }
            toggleLoading(false);
        }

        fetchData();
    }, []);


    return (
        <>
            <div className={styles['container-new']}>
                <h1>Nieuw toegevoegd</h1>
                {/*<input className={styles['search-new']} type="text" placeholder="Typ hier je bestemmingsland.." />*/}
                {/*<button className={styles.searchNew}>Zoek</button>*/}
                <ul>
                    {error && <p className={styles.error}>{error}</p>}
                    {loading && <p>Data wordt geladen...</p>}
                </ul>
            </div>

        </>
    );
}

export default New;
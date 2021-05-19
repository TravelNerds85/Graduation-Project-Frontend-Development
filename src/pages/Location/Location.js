import React, {useEffect, useState} from "react";
import axios from "axios";

// import { AuthContext } from '../../context/AuthContext';
import styles from './Location.module.css'

function Location() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setError("");
            toggleLoading(true);

            try {
                const response = await axios.get(
                    // "https://unogsng.p.rapidapi.com/images",
                    {
                        params: {netflixid: '81037848', offset: '3', limit: '100'},
                        headers: {
                            "x-rapidapi-key":
                                "5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9",
                            "x-rapidapi-host": "unogsng.p.rapidapi.com",
                        },
                    }
                );
                console.log('RESPONSE: ', response.data)
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
            <div className={styles['container-location']}>
                <h1>Locatie</h1>
                {/*<input className={styles['search-location']} type="text" placeholder="Typ hier je bestemmingsland.." />*/}
                {/*    <button className={styles.searchLocation}>Zoek</button>*/}


                <ul>
                    {error && <p className={styles.error}>{error}</p>}
                    {loading && <p>Data wordt geladen...</p>}


                    {/*{countries &&*/}
                    {/*countries.map((country) => {*/}
                    {/*    return <li key={country.country}>{country.country}<b>{country.countrycode}</b></li>;*/}
                    {/*})}*/}
                </ul>

            </div>
        </>
    );
}

export default Location;
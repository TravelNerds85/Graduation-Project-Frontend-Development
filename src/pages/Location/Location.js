import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Location.module.css'

function Location() {
    const [countries, setCountries] = useState('');
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setError("");
            toggleLoading(true);
            try {
                const response = await axios.get(
                    'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                    {
                        params: {t: 'lc', q: 'available'},
                        headers: {
                            'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                            'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
                        },
                    }
                );
                setCountries(response.data.ITEMS);
            } catch (e) {
                setError("Something went wrong... 😢");
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            <div className={styles['container-location']}>
                <h1>Location</h1>
                <p>On this website you can find information for the following countries:</p>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
                <div>
                    {countries &&
                    countries.map((country) => {
                        console.log(country);
                        return <ul className={styles.response}>
                            <li key={country.locationname}>{country[2]}</li>
                        </ul>
                    })}
                </div>
            </div>
        </>
    );
}

export default Location;
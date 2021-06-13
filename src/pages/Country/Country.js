import React, { useEffect, useState } from 'react';
import styles from './Country.module.css';
import axios from 'axios';

function Country() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchSearchData() {
            setError('');
            toggleLoading(true);
            try {
                const response = await axios.get(
                    'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                    {
                        params: {
                            q: `get:-!1900,2021-!0,5-!0,10-!0-!Any-!Any-!Any-!gt100`,
                            t: 'ns',
                            cl: 'all',
                            ob: 'Title',
                            p: '1',
                            sa: 'or'
                        },
                        headers: {
                            'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                            'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
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
        fetchSearchData();
    }, []);

    return (
        <>
            <div className={styles['container-construction']}>
                <h1>Country Info</h1>
                <h2>Searching by country is under construction...</h2>
                <h3>At the moment you can only check out these movies and series which are available
                    at <span>all </span>
                    destinations.</h3>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
                <div className={styles['container-country']}>
                    {/*    /!*<SearchBar fetchSearchData={fetchSearchData} searchText={searchCountry} setSearchText={setSearchCountry}/>*!/*/}
                </div>
            </div>
            <div className={styles['result-container']}>
                {countries &&
                countries.map((countries) => {
                    return <ul className={styles['result-country']}>
                        <li key={countries.titletwo} className={styles['title-country']} dangerouslySetInnerHTML={{__html: countries.title}}></li>
                        <li key={countries.photo}><img src={countries.image} alt={countries.title}/></li>
                        <li key={countries.typecountry} className={styles['type-country']}>{countries.type}</li>
                        <li key={countries.synopsiscountry} className={styles['synopsis-country']} dangerouslySetInnerHTML={{__html: countries.synopsis}}></li>
                    </ul>
                })}
            </div>
        </>
    );
}

export default Country;
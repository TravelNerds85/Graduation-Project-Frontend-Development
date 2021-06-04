import React, {useEffect, useState} from 'react';
import styles from './Country.module.css';
import axios from 'axios';
// import SearchBar from "../../components/SearchBar/SearchBar";

function Country() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    // const [searchCountry, setSearchCountry] = useState('');

    useEffect(() => {
    async function fetchSearchData() {
        setError('');
        toggleLoading(true);
        try {
            const response = await axios.get(
                'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                {
                    params: {t: 'loadvideo', q: '60029591'},
                    headers: {
                        'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
                    },
                }
            );
            console.log('RESPONSE', response.data.RESULT.nfinfo.title);
            setCountries(response.data.RESULT.nfinfo);
            console.log('COUNTRIES', countries);

        } catch (e) {
            setError("Something went wrong... 😢");
            console.error(e);
        }
        toggleLoading(false);

        // console.log(searchCountry)
    }
    fetchSearchData();
    },[]);

    return (
        <>
            <div className={styles['container-country']}>
                <h1>Country</h1>
                <p>Check out which movies and series are available at your destination.</p>
                {/*<SearchBar fetchSearchData={fetchSearchData} searchText={searchCountry} setSearchText={setSearchCountry}/>*/}
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
            </div>
            {/*<ul className={styles['country-container']}>*/}
            {/*    {countries &&*/}
            {/*    countries.map((countries) => {*/}
            {/*        return <div className={styles['result-country']}>*/}
            {/*            <li key={countries.title}>{countries.title}*/}
            {/*            </li>*/}
            {/*        </div>*/}
            {/*    })}*/}
            {/*</ul>*/}
        </>
    );
}

export default Country;
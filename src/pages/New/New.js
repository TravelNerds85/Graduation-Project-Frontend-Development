import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './New.module.css';

// import NewItem from "../../components/NewItem";

function New() {
    const [searchNew, setSearchNew] = useState([]);
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [countries, setCountries] = useState([]);

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            fetchData();
        }
    }

    async function fetchData() {
        setError("");
        toggleLoading(true);
        try {
            const response = await axios.get(
                'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                {
                    params: {q: `get:new2:${searchText}`, p: '1', t: 'ns', st: 'adv'},
                    headers: {
                        'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
                    }
                }
            );


            console.log('RESPONSE', response.data.ITEMS)
            setSearchNew(response.data.ITEMS);

        } catch (e) {
            setError("Something went wrong... 😢");
            console.error(e);
        }
        toggleLoading(false);
        console.log(searchText);
    }

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
                console.log('RESPONSE: ', response.data)
                setCountries(response.data.ITEMS);
            } catch (e) {
                setError("Something went wrong... 😢");
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchData();
    }, []);

    console.log(countries)

    return (
        <>
            <div className={styles['container-new']}>
                <h1>New</h1>
                <p>The following movies and series will be added to Netflix</p>
                <p>If you don't know the country code, please check the location page.</p>

                <input
                    className={styles['search-new']}
                    type="text"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Please enter country code"
                    onKeyDown={keyPressCheck}
                    list='countries'
                />
                <datalist id="countries">
                    {countries &&
                    countries.map((country) => {
                        console.log(country)
                        return <option value={country[1].toUpperCase()}>{country[2]}</option>
                    })}
                </datalist>
                <button
                    type="submit"
                    className={styles.searchNew}
                    onClick={fetchData}
                    disabled={!searchText}
                >
                    Search
                </button>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
            </div>

            <ul className={styles['result-container']}>
                {searchNew &&
                searchNew.map((searchNew) => {
                    return <div className={styles['result-new']}>
                        <li key={searchNew.title}>{searchNew.title}
                            <img src={searchNew.image} alt={searchNew.title}/>
                            <li>{searchNew.type}</li>
                            <li>New date: {searchNew.unogsdate}</li>
                            <li dangerouslySetInnerHTML={{__html: searchNew.synopsis}}></li>
                        </li>
                    </div>
                })}
            </ul>


        </>
);
}

export default New;
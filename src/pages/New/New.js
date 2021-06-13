import React, {useState} from 'react';
import axios from 'axios';
import styles from './New.module.css';
import SearchBar from "../../components/SearchBar/SearchBar";

function New() {
    const [searchNew, setSearchNew] = useState([]);
    const [error, setError] = useState("");
    const [loading, toggleLoading] = useState(false);
    const [searchText, setSearchText] = useState('');

    async function fetchSearchData() {
        setError("");
        toggleLoading(true);
        try {
            const response = await axios.get(
                'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                {
                    params: {q: `get:new5:${searchText}`, p: '1', t: 'ns', st: 'adv'},
                    headers: {
                        'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
                    }
                }
            );
            // console.log('RESPONSE', response.data.ITEMS)
            setSearchNew(response.data.ITEMS);

        } catch (e) {
            setError("Something went wrong... 😢");
            console.error(e);
        }
        toggleLoading(false);
        // console.log(searchText);
    }

    // console.log(countries)

    return (
        <>
            {/*<div className={styles.container}>*/}
            <div className={styles['container-new']}>
                <h1>New</h1>
                <p>The following movies and series will be added to Netflix</p>
                <SearchBar fetchSearchData={fetchSearchData} searchText={searchText} setSearchText={setSearchText}/>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
            </div>
            <div className={styles['result-container']}>
                {searchNew &&
                searchNew.map((searchNew) => {
                    return <ul className={styles['result-new']}>
                            <li key={searchNew.titlenew} className={styles.title} dangerouslySetInnerHTML={{__html: searchNew.title}}></li>
                            <li key={searchNew.imagenew}><img src={searchNew.image} alt={searchNew.title}/></li>
                            <li key={searchNew.typenew} className={styles.type}>{searchNew.type}</li>
                            <li key={searchNew.datenew} className={styles.date}>New date: {searchNew.unogsdate}</li>
                            <li key={searchNew.synopsisnew} className={styles.synopsis} dangerouslySetInnerHTML={{__html: searchNew.synopsis}}></li>
                    </ul>
                })}
            </div>
            {/*</div>*/}
        </>
    );
}

export default New;
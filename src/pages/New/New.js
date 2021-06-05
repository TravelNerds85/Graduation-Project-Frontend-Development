import React, {useState} from 'react';
import axios from 'axios';
import styles from './New.module.css';
import SearchBar from "../../components/SearchBar/SearchBar";

// import NewItem from "../../components/NewItem";

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
                <SearchBar fetchSearchData={fetchSearchData} searchText={searchText} setSearchText={setSearchText} />
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
            </div>

            <ul className={styles['result-container']}>
                {searchNew &&
                searchNew.map((searchNew) => {
                    return <div className={styles['result-new']}>
                        <li key={searchNew.title} className={styles.title}>{searchNew.title}
                            <img src={searchNew.image} alt={searchNew.title}/>
                            <li className={styles.type}>{searchNew.type}</li>
                            <li className={styles.date}>New date: {searchNew.unogsdate}</li>
                            <li className={styles.synopsis} dangerouslySetInnerHTML={{__html: searchNew.synopsis}}></li>
                        </li>
                    </div>
                })}
            </ul>
        {/*</div>*/}
        </>
    );
}

export default New;
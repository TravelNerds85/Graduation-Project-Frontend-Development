import React, {useEffect, useState} from 'react';
// import { AuthContext } from '../../context/AuthContext';
import styles from './Deleted.module.css';
import axios from "axios";
import BtnSearchDeleted from "../../components/Buttons/BtnSearchDeleted";
import SearchBar from "../../components/SearchBar/SearchBar";

function Deleted() {

const [deleted, setDeleted] = useState([]);
const [error, setError] = useState('');
const [query, setQuery] = useState('');
const [loading, toggleLoading] = useState(false);
const [location, setLocation] = useState('');

useEffect(() => {
    async function fetchDataDeleted() {
        setError("");
        toggleLoading(true);
        try {
            const response = await axios.get(
                "https://unogsng.p.rapidapi.com/expiring",
                {
                    params: {countrylist: '78,46'},
                    headers: {
                        "x-rapidapi-key":
                            "5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9",
                        "x-rapidapi-host": "unogsng.p.rapidapi.com",
                    },
                }
            );
            console.log('RESPONSE: ', response.data)
            setDeleted(response.data.results);

        } catch (e) {
            setError("Er is iets mis gegaan bij het ophalen van de data 😢");
            console.error(e);
        }
        toggleLoading(false);
    }
    fetchDataDeleted();
}, []);

return (
    <>
        <div className={styles['container-deleted']}>
            <h1>Laatste kans</h1>
            <p>De volgende titels zullen binnenkort worden verwijderd.</p>
            {/*<span>*/}
                {/*<SearchBar setLocationHandler={setLocation} />*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    className={styles['search-deleted']}*/}
            {/*    value={query}*/}
            {/*    onChange={(e) => setQuery(e.target.value)}*/}
            {/*    placeholder="Typ hier je landcode.."*/}
            {/*/>*/}
            {/*<BtnSearchDeleted />*/}
            {/*</span>*/}

            <ul>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data wordt geladen...</p>}

                    {deleted &&
                    deleted.map((deleted) => {
                        return <li key={deleted.title}>{deleted.title} {deleted.expiredate} {deleted.countrycode}</li>;
                    })}
                </ul>
        </div>

    </>
);
}

export default Deleted;
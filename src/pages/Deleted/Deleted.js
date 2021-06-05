import React, {useState} from 'react';
import styles from './Deleted.module.css';
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

// import DeletedItems from "../../components/DeletedItems";


function Deleted() {
    const [deleted, setDeleted] = useState([]);
    const [error, setError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [searchDeleted, setSearchDeleted] = useState('');

    async function fetchSearchData() {
        setError('');
        toggleLoading(true);
        try {
            const response = await axios.get(
                'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                {
                    params: {q: `get:exp:${searchDeleted}`, t: 'ns', st: 'adv', p: '1'},
                    headers: {
                        'x-rapidapi-key': '5f8cd96691msh979b7a58ac3d79bp1afb83jsndb0fb614cce9',
                        'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
                    },
                }
            );
            console.log('RESPONSE', response.data.ITEMS);
            setDeleted(response.data.ITEMS);

        } catch (e) {
            setError("Something went wrong... 😢");
            console.error(e);
        }
        toggleLoading(false);
        console.log(searchDeleted)
    }


    return (
        <>
            <div className={styles['container-deleted']}>
                <h1>Last chance</h1>
                <p>The following movies and series will be deleted</p>
                <SearchBar fetchSearchData={fetchSearchData} searchText={searchDeleted} setSearchText={setSearchDeleted} />
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>Data is being loaded...</p>}
            </div>
            <ul className={styles['deleted-container']}>
                {deleted &&
                deleted.map((deleted) => {
                    return <div className={styles['result-deleted']}>
                        <li key={deleted.title} className={styles['title-deleted']}>{deleted.title}
                            <img src={deleted.image} alt={deleted.title}/>
                            <li className={styles['type-deleted']}>{deleted.type}</li>
                            <li className={styles['date-deleted']}>Expires: {deleted.unogsdate}</li>
                            <li className={styles['synopsis-deleted']} dangerouslySetInnerHTML={{__html: deleted.synopsis}}></li>
                        </li>
                    </div>
                })}
            </ul>
        </>
    );
}

export default Deleted;
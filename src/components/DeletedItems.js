import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from './DeletedItems.module.css';

function DeletedItems({url}) {
    const [deletedItem, setDeletedItem] = useState({});

    useEffect(() => {
        async function fetchDeletedData() {
            try {
                const {data: {title, countrycode, deletedate}} = await axios.get(url);
                setDeletedItem({
                    title: title,
                    country: countrycode,
                    date: deletedate,
                });
            } catch (e) {
                console.error(e);
            }
        }
        fetchDeletedData()
    }, []);


    return (
        <div className={styles['card-deleted']}>
            {deletedItem && (
                <>
                    <h2>{deletedItem.title}</h2>
                    <h3>{deletedItem.country}</h3>
                    <h3>{deletedItem.date}</h3>
                </>
            )}
        </div>
    );
}

export default DeletedItems;
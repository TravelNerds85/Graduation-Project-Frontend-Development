import React, {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';
import styles from './Profile.module.css';
import {useHistory} from "react-router-dom";

function Profile() {
    const history = useHistory();
    const { user } = useContext(AuthContext);

    return (
            <div className={styles['container-profile']}>
                <h1>Hi <span className={styles.user}>{user && user.username}</span></h1>
                <p>Good to see you (again)!</p>
                <p>Now you have registered and signed in you can have a look at the content.</p>
                <div className={styles.profile}>
                    <button
                        type="button"
                        onClick={() => history.push('/country')}
                    >
                        Country Info
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/new')}
                    >
                        New
                    </button>
                    <button
                        type="button"
                        onClick={() => history.push('/deleted')}
                    >
                        Last chance
                    </button>
                </div>
            </div>
    );
}

export default Profile;

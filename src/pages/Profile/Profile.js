import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './Profile.module.css';

function Profile() {
    const { user } = useContext(AuthContext);
    console.log('profile', user?.username)

    return (
        <div className={styles['container-profile']}>
            <h1>Welkom</h1><span className={styles.user}>{user && user.username}</span>
            <p>Wat leuk om je (weer) te zien!</p>
            <p>Nu je bent aangemeld en ingelogd kun je de gevraagde gegevens bekijken op de website.</p>

            {/*<ul>*/}
            {/*    <li>Gebruikersnaam: {user && user.username}</li>*/}
            {/*    <li>E-mail: {user && user.email}</li>*/}
            {/*</ul>*/}
        </div>
    );
}

export default Profile;

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './Profile.module.css';

function Profile() {
    const { user } = useContext(AuthContext);
    console.log('profile', user?.username)

    return (
        <div className={styles['container-profile']}>
            <ul>
                <li>Gebruikersnaam: {user && user.username}</li>
                <li>E-mail: {user && user.email}</li>
            </ul>
        </div>
    );
}

export default Profile;

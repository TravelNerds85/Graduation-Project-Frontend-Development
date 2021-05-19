import React from 'react';
import BtnGetStarted from "../../components/Buttons/BtnGetStarted";
import styles from './Home.module.css'

function Home() {
    return (

            <div className={styles['background-home']}>
                <div className={styles['container-home']}>
                    <div className={styles['notification-home']}>
                        <h1>Welkom!</h1>
                        <p>Wat leuk dat je een kijkje komt nemen op de</p>
                        <p className={styles['title-home']}>Unofficial Netflix Guide for Travellers.</p>
                        <p>Hier kun je zien of je favoriete films en series beschikbaar zijn op je bestemming.</p>
                        <p>Ook kun je kijken welke films en series, toegevoegd en verwijderd zullen worden.</p>
                    </div>
                    <div>
                        <BtnGetStarted/>
                    </div>
                </div>
            </div>
    );
}

export default Home;
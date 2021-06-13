import React from 'react';
import BtnGetStarted from "../../components/Buttons/BtnGetStarted";
import styles from './Home.module.css'

function Home() {
    return (

            <div className={styles['background-home']}>
                <div className={styles['container-home']}>
                    <div className={styles['notification-home']}>
                        <h1>Welcome!</h1>
                        <p>How nice that you have decided to take a look at the </p>
                        <p className={styles['title-home']}>Unofficial Netflix Guide for Travellers.</p>
                        <p>Here you can check if your favourite movies and series are available at your destination.</p>
                        <p>You can also check which movies will get added and series will get deleted.</p>
                    </div>
                    <div>
                        <BtnGetStarted/>
                    </div>
                </div>
            </div>
    );
}

export default Home;
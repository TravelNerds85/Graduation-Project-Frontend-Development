import React from 'react';
import styles from "./Links.module.css";

function Links() {
    return (
        <>
            <div className={styles['background-links']}>
                <div className={styles['container-links']}>
                    <h1>Links</h1>
                    <p>Here are some interesting sites about movies and series.</p>
                    <ul>
                        <li><a href="https://www.netflix.com/">Netflix</a></li>
                        <li><a href="https://www.imdb.com/">IMDb</a></li>
                        <li><a
                            href="https://www.filmvandaag.nl/nieuws/4628-dit-zijn-de-5-beste-nieuwe-series-op-netflix-van-deze-week">
                            Film Vandaag (Dutch website)</a></li>
                    </ul>
                    <p>Did you do too much binge watching? Check out these streaming services!</p>
                    <ul>
                        <li><a href="https://www.amazon.com/prime">Amazon Prime</a></li>
                        <li><a href="https://www.hbomax.com/">HBO Max</a></li>
                        <li><a href="https://www.disneyplus.com/">Disney Plus</a></li>
                        <li><a href="https://www.discoveryplus.com/">Discovery Plus</a></li>
                        <li><a href="https://www.videoland.com/nl/">Videoland (Dutch Website)</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Links;


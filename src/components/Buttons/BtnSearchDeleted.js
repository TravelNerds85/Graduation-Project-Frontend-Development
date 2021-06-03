import React from 'react';
// import styles from './BtnSearchDeleted.css';
import styles from './BtnGetStarted.module.css';


function BtnSearchDeleted() {

    return(
            <button className={styles.getStarted}
                    type="button"
                    // onClick={fetchDataDeleted}
            >
                Search
            </button>
    );
}

export default BtnSearchDeleted;
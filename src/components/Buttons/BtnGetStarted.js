import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from './BtnGetStarted.module.css';

function BtnGetStarted() {
    const history = useHistory();

    return (
           <button className={styles.getStarted}
                   type="button"
                   onClick={() => history.push('/sign-up')}
           >
               Get Started!
           </button>
    );
}

export default BtnGetStarted;
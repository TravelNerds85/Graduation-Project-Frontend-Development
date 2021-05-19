import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {Link} from "react-router-dom";
import {AuthContext} from '../../context/AuthContext';
import styles from './SignIn.module.css';

function SignIn() {
    const {handleSubmit, register} = useForm();
    const [error, toggleError] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const {logIn} = useContext(AuthContext);
    const host = 'http://localhost:3000';

    // const host = 'https://polar-lake-14365.herokuapp.com';

    async function onSubmit(data) {
        toggleError(false)
        console.log('before request', data);
        try {
            const result = await axios.post(`${host}/login`, data);
            console.log('after request', result)
            logIn(result.data.accessToken)
            toggleSuccess(true);
            localStorage.setItem('token', result.data.accessToken)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles['background-signIn']}>
            <div className={styles['container-sign-in']}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Inloggen</h1>
                    {success ? (
                        <h2>Inloggen is gelukt! Je wordt nu doorgestuurd.</h2>
                    ) : (
                        <>
                            <label htmlFor="email-field">
                                Email-adres:
                                <input
                                    type="email"
                                    id="email-field"
                                    name="email"
                                    placeholder="Typ hier uw email"
                                    {...register("email")}
                                />
                            </label>

                            <label htmlFor="password-field">
                                Wachtwoord:
                                <input
                                    type="password"
                                    id="password-field"
                                    name="password"
                                    placeholder="Typ hier uw wachtwoord"
                                    {...register("password")}
                                />
                            </label>
                            <button
                                className={styles.login}
                                type="submit"
                            >
                                Inloggen
                            </button>
                            {' '}
                        </>
                    )}
                    {error && <p className={styles.error}>Er is een fout opgetreden. Probeer het opnieuw.</p>}
                </form>
                <p className={styles['redirect-sign-in']}>Heb je nog geen account? <Link to="/sign-up">Meld</Link> je
                    dan
                    eerst aan.</p>
            </div>
        </div>
    );
}

export default SignIn;
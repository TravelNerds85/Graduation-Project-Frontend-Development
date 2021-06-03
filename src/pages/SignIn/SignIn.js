import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {Link, Redirect,} from "react-router-dom";
import {AuthContext} from '../../context/AuthContext';
import styles from './SignIn.module.css';

function SignIn() {
    const {handleSubmit, register} = useForm();
    const [error, toggleError] = useState(false);
    const [success, toggleSuccess] = useState(false);
    const {logIn, user} = useContext(AuthContext);
    console.log(logIn);

    const host = 'https://polar-lake-14365.herokuapp.com';

    async function onSubmit(data) {
        toggleError(false)
        console.log('before request', data);
        try {
            const result = await axios.post(`${host}/api/auth/signin`, data);
            console.log('after request', result)
            logIn(result.data.accessToken)
            toggleSuccess(true);
            localStorage.setItem('token', result.data.accessToken)
        } catch (e) {
            console.error(e);
        }
    }
    if (user) {
        return <Redirect to="/profile"/>
    }

    return (
        <div className={styles['background-signIn']}>
            <div className={styles['container-sign-in']}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Sign in</h1>
                    {success ? (
                        <h2>Login succeeded! You're being transferred.</h2>
                    ) : (
                        <>
                            <label htmlFor="username">
                                Username:
                                <input
                                    type="text"
                                    id={styles["username-login"]}
                                    name="username"
                                    placeholder="Enter username here"
                                    {...register("username")}
                                />
                            </label>

                            <label htmlFor="password-field">
                                Password:
                                <input
                                    type="password"
                                    id={styles["password-login"]}
                                    name="password"
                                    placeholder="Enter password here"
                                    {...register("password")}
                                />
                            </label>
                            <button
                                className={styles.login}
                                type="submit"
                            >
                                Sign in
                            </button>
                            {' '}
                        </>
                    )}
                    {error && <p className={styles.error}>Er is een fout opgetreden. Probeer het opnieuw.</p>}
                </form>
                <p className={styles['redirect-sign-in']}>No account yet? <Link to="/sign-up">Register</Link> here.</p>
            </div>
        </div>
    );
}

export default SignIn;
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

    const host = 'https://polar-lake-14365.herokuapp.com';

    async function onSubmit(data) {
        toggleError(false)
        try {
            const result = await axios.post(`${host}/api/auth/signin`, data);
            logIn(result.data.accessToken)
            toggleSuccess(true);
            localStorage.setItem('token', result.data.accessToken)
        } catch (e) {
            toggleError(e.response.data);
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
                                    {...register("username", {required: true})}
                                />
                            </label>

                            <label htmlFor="password-field">
                                Password:
                                <input
                                    type="password"
                                    id={styles["password-login"]}
                                    name="password"
                                    placeholder="Enter password here"
                                    {...register("password", {required: true})}
                                />
                            </label>
                            <button
                                type="submit"
                                className={styles.login}
                            >
                                Sign in
                            </button>
                        </>
                    )}
                    {error && <p className={styles.error}>Username or password invalid, please try again.</p>}
                </form>
                <p className={styles['redirect-sign-in']}>No account yet? <Link to="/sign-up">Register</Link> here.</p>
            </div>
        </div>
    );
}

export default SignIn;
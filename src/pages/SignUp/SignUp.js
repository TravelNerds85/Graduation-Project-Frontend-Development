import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './SignUp.module.css';

function SignUp() {
    const [success, toggleSuccess] = useState(false);
    const [error, toggleError] = useState(null);
    const history = useHistory();
    const {handleSubmit, register, formState: {errors}} = useForm();

    async function onSubmit(data) {
        toggleError(null);
        console.log(data);
        try {
            const result = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                "email": data.email,
                "username": data.username,
                "password": data.password,
                "role": ["user", "admin"]
            });
            console.log(result)
            toggleSuccess(true);
            setTimeout(() => {
                history.push('/sign-in');
            }, 1500);
        } catch (e) {
            toggleError(e.response.data.message);
            console.error(e)
        }
    }

    return (
        <div className={styles['container-signup']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>
                <p>Good to see that you have decided to sign up!</p><p>Please fill in the required information.</p>

                {success ? (
                    <h2>Register successful!</h2>
                ) : (
                    <>
                        <label htmlFor="email-field">
                            Email:
                            <input
                                type="email"
                                id={styles["email-field"]}
                                placeholder="Enter email here"
                                name="email"
                                {...register("email", {required: true})}
                            />
                        </label>
                        <label htmlFor="username-field">
                            Username:
                            <input
                                type="text"
                                id={styles["username-field"]}
                                placeholder="Enter username here"
                                name="username"
                                {...register("username", {required: true, maxLength: 20})}
                            />
                        </label>
                        <label htmlFor="password-field">
                            Password:
                            <input
                                type="password"
                                id={styles["password-field"]}
                                placeholder="Enter password here"
                                name="password"
                                {...register("password", {required: true})}
                            />
                        </label>
                        <button
                            type="submit"
                            className={styles.register}
                        >
                            Create account
                        </button>
                    </>
                )}
                {errors.username && <p className={styles.error}>This field is required</p>}
                {errors.password && <p className={styles.error}>This field is required</p>}
                {errors.email && <p className={styles.error}>This field is required</p>}
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <p className={styles.redirect}>You already have an account? Click <Link to="/sign-in">here</Link> to
                sign in.</p>
        </div>
    );
}

export default SignUp;
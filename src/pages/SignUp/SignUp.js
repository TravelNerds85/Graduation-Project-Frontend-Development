import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import styles from './SignUp.module.css';

function SignUp() {
    const [success, toggleSuccess] = useState(false);
    const [error, toggleError] = useState(false);
    const history = useHistory();
    const {handleSubmit, register} = useForm();

    async function onSubmit(data) {
        toggleError(false);
        console.log(data);
        try {
            const result = await axios.post('', {
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
            console.error(e)
            toggleError(true);
        }
    }

    return (
        <div className={styles['background-signUp']}>
        <div className={styles['container-signup']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Aanmelden</h1>
                <p>Wat leuk dat je hebt besloten om je aan te melden!</p><p>Vul snel onderstaande gegevens in.</p>

                {success ? (
                    <h2>Aanmelden gelukt!</h2>
                ) : (
                    <>
                        <label htmlFor="email-field">
                            Email-adres:
                            <input
                                type="email"
                                id={styles["email-field"]}
                                placeholder="Typ hier je email-adres"
                                name="email"
                                {...register("email")}
                            />
                        </label>
                        <label htmlFor="username-field">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id={styles["username-field"]}
                                placeholder="Typ hier je gebruikersnaam"
                                name="username"
                                {...register("username")}
                            />
                        </label>
                        <label htmlFor="password-field">
                            Wachtwoord:
                            <input
                                type="password"
                                id={styles["password-field"]}
                                placeholder="Typ hier je wachtwoord"
                                name="password"
                                {...register("password")}
                            />
                        </label>
                        <button
                            type="submit"
                            className={styles.register}
                        >
                            Maak account aan
                        </button>
                        {' '}
                    </>
                )}
                {error && <p className={styles.error}>Er is een fout opgetreden. Probeer het opnieuw.</p>}
            </form>
            <p className={styles.redirect}>Heb je al een account? Je kunt <Link to="/sign-in">hier</Link> inloggen.
            </p>
        </div>
</div>
    );
}

export default SignUp;
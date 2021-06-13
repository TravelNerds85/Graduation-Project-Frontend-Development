import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('JWT_token');

        if (token !== null && authState.user === null) {
            logIn(token)
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function logIn(jwt) {
        const decoded = jwt_decode(jwt);
        console.log('DECODED JWT', decoded);
        localStorage.setItem('JWT_token', jwt);
        try {
            const result = await axios.get(
                'https://polar-lake-14365.herokuapp.com/api/user',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + jwt,
                    },
                }
            );
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });
        } catch (e) {
            console.error(e);
        }
    }

    function logOut() {
        localStorage.clear();
        setAuthState({
            user: null,
            status: "done",
        })
        history.push("/");
    }

    const data = {
        ...authState,
        logIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={ data }>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
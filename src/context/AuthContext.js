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

        if (token !== undefined && authState.user === null) {
            logIn(token)
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function logIn(jwt) {
        console.log(jwt);
        const decoded = jwt_decode(jwt);
        const userId = decoded.sub;
        console.log('DECODED JWT', decoded);
        localStorage.setItem('JWT_token', jwt);
        history.push('/profile');

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
            console.log(result);

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
        // Leeghalen local storage met localStorage.clear();
        // user in Context op null zetten
    }

    const data = {
        ...authState,
        logIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
            {/* {authState.status === 'done' ? (
				children
			) : (
				<p>Loading...</p>
			)} */}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider
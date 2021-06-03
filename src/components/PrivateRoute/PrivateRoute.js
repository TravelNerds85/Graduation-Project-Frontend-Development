import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";

function PrivateRoute({children}) {
    const {user} = useContext(AuthContext);

    return (
        <Route>
            {user !== null ? children : <Redirect to="/sign-in" />}
        </Route>
    )
}

export default PrivateRoute;
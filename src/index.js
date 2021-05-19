import React from 'react';
import ReactDOM from 'react-dom';
import AuthContextProvider from './context/AuthContext';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/*<AuthContextProvider>*/}
                <App/>
            {/*</AuthContextProvider>*/}
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

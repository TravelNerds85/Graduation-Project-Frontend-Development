import React from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import New from "./pages/New/New";
import Deleted from "./pages/Deleted/Deleted";
import Profile from "./pages/Profile/Profile";
import Links from "./pages/Links/Links";
import Country from "./pages/Country/Country";
import './App.modules.css';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/location" exact component={Location}/>
                <Route path="/sign-in" exact component={SignIn}/>
                <Route path="/sign-up" exact component={SignUp}/>
                <Route path="/links" exact component={Links}/>
                <PrivateRoute path="/deleted">
                    <Deleted/>
                </PrivateRoute>
                <PrivateRoute path="/new">
                    <New/>
                </PrivateRoute>
                <PrivateRoute path="/country">
                    <Country/>
                </PrivateRoute>
                <PrivateRoute path="/profile">
                    <Profile/>
                </PrivateRoute>
            </Switch>
        </>
    );
}


export default App;
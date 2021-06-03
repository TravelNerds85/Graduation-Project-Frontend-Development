import React, {useContext} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavBarElements";
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const {user, logOut} = useContext(AuthContext);


    return (
        <>
            <Nav>
                <NavLink to="/">
                    Unofficial Netflix Guide for Travellers
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/location" activeStyle>Location</NavLink>
                    <NavLink to="/links" activeStyle>Links</NavLink>
                    <NavLink to="/sign-up" activeStyle>Register</NavLink>


                    <NavLink to="/new" activeStyle>New</NavLink>
                    <NavLink to="/deleted" activeStyle>Last chance</NavLink>


                    {/*{user &&*/}
                    {/*<NavLink to="/new" activeStyle>New</NavLink>*/}
                    {/*}*/}
                    {/*{user &&*/}
                    {/*<NavLink to="/deleted" activeStyle>Last chance</NavLink>*/}
                    {/*}*/}
                </NavMenu>
                <NavBtn>
                    {user ? (
                        <NavBtnLink to="/" onClick={logOut}>Sign Out</NavBtnLink>
                    ) : (
                        <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                    )}
                </NavBtn>
            </Nav>
        </>
    );
}

export default NavBar;
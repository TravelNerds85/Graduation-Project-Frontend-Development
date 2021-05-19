import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavBarElements";

function NavBar() {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    Unofficial Netflix Guide for Travellers
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/location" activeStyle>
                        Locatie
                    </NavLink>
                    <NavLink to="/new" activeStyle>
                        Nieuw
                    </NavLink>
                    <NavLink to="/deleted" activeStyle>
                        Laatste kans
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Aanmelden
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Inloggen</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

export default NavBar;


// const [navLinkOpen, navLinkToggle] = useState(false)

// function handleNavLinksToggle() {
//     navLinkToggle(!navLinkOpen);
// }
//
// function renderClasses() {
//     let classes = 'styled-components';
//
//     if (navLinkOpen) {
//         classes += "active"
//     }
//     return classes
// }

// <div onClick={handleNavLinksToggle} className={styles["hamburger-toggle"]}>
//     <i className="fas fa-bars fa-lg"> </i>
// </div>
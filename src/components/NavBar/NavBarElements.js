import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc(100vw - 1000px) / 2;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;


  @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

 &:hover {
   transition: all 0.2s ease-in-out;
   background: #fff;
   color: #010606;
 }
`;



/*nav {*/
/*    display: flex;*/
/*    justify-content: space-around;*/
/*    min-height: 8vh;*/
/*    position: absolute;*/
/*    width: 100%;*/
/*    align-items: center;*/
/*    background-color: #090808;*/
/*}*/

/*.title-navbar {*/
/*    color: rgba(255, 255, 255, 0.5);*/
/*    font-size: 25px;*/
/*    margin-left: 7px;*/
/*    letter-spacing: 1px;*/
/*    font-weight: bold;*/
/*}*/

/*.title-navbar:hover {*/
/*    color: rgba(255, 255, 255, 1);*/
/*}*/


/*.nav-links {*/
/*    display: flex;*/
/*    list-style: none;*/
/*    justify-content: space-evenly;*/
/*    width: 50%;*/
/*    font-size: 20px;*/
/*    font-weight: bold;*/
/*    padding: 5px 10px;*/
/*    !*color: deeppink;*!*/
/*}*/

/*.link {*/
/*    letter-spacing: 1px;*/
/*    font-weight: bold;*/
/*}*/

/*.link a {*/
/*    color: rgba(255, 255, 255, 0.5);*/
/*}*/

/*.link a:hover {*/
/*    color: rgba(255, 255, 255, 1);*/
/*}*/

/*.hamburger-toggle {*/
/*    color: white;*/
/*    cursor: pointer;*/
/*    display: none;*/
/*}*/

/*.nav-btn {*/
/*    display: flex;*/
/*    align-items: center;*/
/*    margin-right: -20px;*/
/*    border-radius: 4px;*/
/*    background: rgba(255, 255, 255, 0.8);;*/
/*    padding: 3px 22px;*/
/*    color: #010606;*/
/*    border: none;*/
/*    outline: none;*/
/*    cursor: pointer;*/
/*    transition: all 0.5s ease-in-out;*/
/*    text-decoration: none;*/
/*}*/

/*.nav-btn:hover {*/
/*     transition: all 0.2s ease-in-out;*/
/*     background: #ffffff;*/
/*     color: #010606;*/
/*}*/



/*@media screen and (max-width: 768px) {*/
/*    body {*/
/*        overflow-x: hidden;*/
/*        !*overflow-y: hidden;*!*/
/*    }*/

/*    .hamburger-toggle {*/
/*        display: block;*/
/*    }*/

/*    .nav-links {*/
/*        position: absolute;*/
/*        right: 0;*/
/*        display: flex;*/
/*        flex-direction: column;*/
/*        height: 92vh;*/
/*        align-items: center;*/
/*        width: 100%;*/
/*        top: 8vh;*/
/*        background-color: teal;*/
/*        font-size: 32px;*/
/*        transform: translateX(100%);*/
/*        transition: transform 0.7s ease-in;*/
/*    }*/

/*    .nav-btn {*/
/*        display: none;*/
/*    }*/

/*    .active {*/
/*        transform: translateX(0%);*/
/*    }*/
/*}*/
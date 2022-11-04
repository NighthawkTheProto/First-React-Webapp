import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {
Nav,
NavLink,
Bars,
NavMenu,
//NavBtn,
//NavBtnLink,
} from './NavbarElements';
var hasFlipped = "False";

function openNav(){
	if (hasFlipped == "True") {
		document.getElementById("nav").style.display = "none";
		document.getElementById("hamburger").style.rotate = "";
		document.getElementById("hamburger").style.left = "";
		document.getElementById("hamburger").style.top = "";
		hasFlipped = "False";
	}
	else if(hasFlipped == "False"){
		document.getElementById("nav").style.display = "flex";
		document.getElementById("hamburger").style.rotate = "90deg";
		document.getElementById("hamburger").style.left = "94.5%";
		document.getElementById("hamburger").style.top = "14%";
		hasFlipped = "True";
	}

}


const Navbar = () => {
return (
	<>
	<Nav>
	<Bars id={"hamburger"} onClick={openNav} />
		<NavMenu id={"nav"}>
    <NavLink to="/home" activeStyle>
      Home
    </NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
    <NavLink to='/team' activeStyle>
			Our Team
		</NavLink>
		<NavLink to='/privacy' activeStyle>
			Privacy
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	</Nav>
	</>
);

};

export default Navbar;

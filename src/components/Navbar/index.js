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

//function openNav(){
//  console.log("open Nav")
  
//}


const Navbar = () => {
return (
	<>
	<Nav>
	{/*<Bars onClick={openNav} /> use this to call function openNav*/}
   <Bars />
		<NavMenu>
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

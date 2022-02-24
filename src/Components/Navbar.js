import React from 'react';
import Logo from '../Assets/logo.svg'

function Navbar() {
	return(
		<nav className="md:h-24 h-16 flex items-center shadow-md">
			<img src={Logo} alt="logo Airbnb" className='md:w-32 w-28 mx-12'/>
		</nav>
	)
}

export default Navbar

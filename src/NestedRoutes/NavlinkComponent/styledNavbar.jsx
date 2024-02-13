import { NavLink, Outlet } from "react-router-dom";

// Navlink(style)
/*
export default function StyledNavbar(){
    return(

        <nav className="navbar">
            <NavLink 
                to='/' 
                style={({isActive}) => {
                    return { color: isActive ? 'red' : 'grey' };
                }}
            >
                Home

            </NavLink>
            <NavLink 
                to='/about' 
                style={({isActive}) => {
                    return { color: isActive ? 'red' : 'grey' };
                }}
            >
                About

            </NavLink>
            <NavLink 
                to='/product' 
                style={({isActive}) => {
                    return { color: isActive ? 'red' : 'grey' };
                }}
            >
                Product

            </NavLink>
            <NavLink 
                to='/contact' 
                style={({isActive}) => {
                    return { color: isActive ? 'red' : 'grey' };
                }}
            >
                Contact

            </NavLink>
            <Outlet />
        </nav>
    )
}
*/


// NavLink (className)
export default function StyledNavbar(){
    return(

        <nav className="navbar">
            <NavLink 
                to='/'
                className={ ( {isActive} ) => ( isActive ? 'link active' : 'link' ) }
            >
                Home

            </NavLink>
            <NavLink 
                to='/about'
                className={ ( {isActive} ) => ( isActive ? 'link active' : 'link' ) }
            >
                About
            </NavLink>
            <NavLink 
                to='/product'
                className={ ( {isActive} ) => ( isActive ? 'link active' : 'link' ) }
            >
                Product
            </NavLink>
            <NavLink 
                to='/contact'
                className={ ( {isActive} ) => ( isActive ? 'link active' : 'link' ) }
            >
                Contact
            </NavLink>
            <Outlet />
        </nav>
    )
}
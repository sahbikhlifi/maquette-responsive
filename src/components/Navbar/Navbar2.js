import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, useLocation, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import './Navbar2.css';
import logo from '../../images/logo.png'


function Navbar2() {
    const navbarLinks = useRef(null);
    // console.log(navbarLinks)
    const handleNavbarButton = (e) => {
        navbarLinks.current.classList.toggle('menu-collapse');
    };

    const hideNavMenu = () => {
        if (!navbarLinks.current.classList.contains('menu-collapse')) {
            navbarLinks.current.classList.add('menu-collapse');
        }
    }

    return (
        <div className="App">
            <BrowserRouter>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <NavLink to="/" className='brand-logo'><img src={logo} /></NavLink>
                        <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div ref={navbarLinks} className='navbar-links menu-collapse'>
                            <ul className='links-list'>
                                <li className='nav-item'>
                                    <NavLink exact={true} className='nav-link' to='/about'>About us</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact={true} className='nav-link' to='/services'>Services</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact={true} className='nav-link' to='/careers'>Careers</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink exact={true} className='nav-link' to='/function'>Functions</NavLink>
                                </li>
                            </ul>
                        </div>
                        <NavLink to="/contact">
                            <button className="contact_us">
                                Contact us
                            </button>
                        </NavLink>

                        <button className="btn_language">
                            FR
                        </button>
                    </div>
                </nav>
                <div className='container'>
                    <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
                </div>
            </BrowserRouter>
        </div>
    );
}

function AllRoutes({ hideMenu }) {

    let location = useLocation();
    useEffect(() => {
        hideMenu();
    }, [location]);

    return (
        <Switch>
            {/* <Route path="/about" component={About}>
            </Route>
            <Route path="/services" component={Services}>
            </Route>
            <Route path="/careers" component={Careers}>
            </Route>
            <Route path="/functions" component={Functions}>
            </Route> 
            <Route path="/contact" component={Contact}>
            </Route>  */}
            <Route path="/" component={Home}>
            </Route>
        </Switch>
    );
}


export default Navbar2;

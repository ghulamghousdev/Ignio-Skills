import React from 'react';
import '../styles/NavBar.scss'
function NavBar(){
    return(
        <div className="home-nav one-edge-shadow">
            <div className="home-row ">
                <div className="home-logo">Ignio Skills</div>
                <ul className="home-menu">
                    <li className="home-menu__li"><a className="home-menu__link home-menu__link--btn " href="/user/login">Login</a></li>
                    <li className="home-menu__li"><a className="home-menu__link home-menu__link--btn" href="/user/signup">Join</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar; 
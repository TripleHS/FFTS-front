import React from "react";
import heart from '../images/heart.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <div className="flex p-2 justify-between">
                <Link to="" className="flex">
                    <img className="w-12 mx-4" src={heart} alt="logo"/>
                    <p className="my-auto">Far From The Stretchers</p>
                </Link>
                <div className="flex">
                    <ul className="flex">
                        <li className="li-styles"><Link to="/q&a">Pytania i odpowiedzi</Link></li>
                        <li className="li-styles"><Link to="/contact">Kontakt</Link></li>
                        <li className="li-styles"><Link to="/register">Zarejestruj się</Link></li>
                        <li className="li-styles"><Link to="/signin">Zaloguj się</Link></li>
                    </ul>
                    <p className="text-secondaryBg my-auto mr-4">Infolinia: 874 459 985</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar

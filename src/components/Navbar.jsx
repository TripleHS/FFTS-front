import React from "react";
import heart from '../images/heart.png'

const CreateNavbar = () => {
    return(
        <nav>
            <div className="bg-gray-200 flex p-2 space-x-0 justify-between">
                <a href='#' className="flex">
                    <img className="w-12 mx-4" src={heart} alt="logo"/>
                    <p className="my-auto">Far From The Stretchers</p>
                </a>
                <ul className="flex">
                    <li className="li-styles"><a href='#'>Pytania i odpowiedzi</a></li>
                    <li className="li-styles"><a href='#'>Kontakt</a></li>
                    <li className="li-styles"><a href='#'>Zarejestruj się</a></li>
                    <li className="li-styles"><a href='#'>Zaloguj się</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default CreateNavbar;
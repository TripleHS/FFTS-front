import React, { useContext } from "react"
import heart from "../images/heart.png"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AppContext from '../context/AppContext/AppContext'

const Navbar = () => {
  const {isLogged, setIsLogged} = useContext(AppContext);
  
  return (
    <nav>
      <div className="flex p-2 justify-between">
        <Link to="" className="flex">
          <img className="w-12 mx-4" src={heart} alt="logo" />
          <p className="my-auto">Far From The Stretchers</p>
        </Link>
        <div className="flex">
          <ul className="flex">
            <li className="li-styles">
              <Link to="/q&a">Pytania i odpowiedzi</Link>
            </li>
            <li className="li-styles">
              <a href='#footer'>Kontakt</a>
            </li>
            {isLogged?
            <>
              <li className="li-styles">
                <Link to="/myaccount">Moje konto</Link>
              </li>
              <li className="li-styles">
                <Link to="/myvisits">Moje wizyty</Link>
              </li>
              <li className="li-styles">
                <Link to="" onClick={()=>setIsLogged(prevState=>!prevState)}>Wyloguj się</Link>
              </li>
            </>
            :
            <>
              <li className="li-styles">
                <Link to="/register">Zarejestruj się</Link>
              </li>
              <li className="li-styles">
                <Link to="/login">Zaloguj się</Link>
              </li>
            </>
            }
          </ul>
          <p className="text-secondaryBg my-auto mr-4">Infolinia: 874 459 985</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

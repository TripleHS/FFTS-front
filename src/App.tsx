import React from "react"
import "tailwindcss/tailwind.css"
// import Form from "./components/Form"
import AppContext from "./context/AppContext/AppContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import RegisterState from "./context/RegisterContext/RegisterState"
import Register from "./components/Register"
import LoginState from "./context/LoginContext/LoginState"
import Login from "./components/Login"
import SearchEngineState from "./context/SearchEngineContext/SearchEngineState"
import SearchEngine from "./components/SearchEngine"
import Slider from "./components/Slider/Slider"
import QAndA from './components/Q&A'

function App() {
  return (
    <AppContext.Provider value={null}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-1">
            <Switch>
              <Route path="/contact"></Route>
              <Route path="/q&a">
                <QAndA/>
              </Route>
              <Route path="/register">
                <RegisterState>
                  <Register />
                </RegisterState>
              </Route>
              <Route path="/login">
                <LoginState>
                  <Login />
                </LoginState>
              </Route>
              <Route path="">
                <SearchEngineState>
                      <SearchEngine/>
                      <Slider/>
                </SearchEngineState>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App

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
import SearchedDoctor from "./components/SearchedDoctor"

function App() {
  return (
    <AppContext.Provider value={null}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-200">
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
                  <div className='flex'>
                    <div className='leftSide flex-1'>
                        <SearchEngine/>
                        <div>
                          <SearchedDoctor/>
                          <SearchedDoctor/>
                          <SearchedDoctor/>
                          <SearchedDoctor/>
                          <SearchedDoctor/>
                          <SearchedDoctor/>
                        </div>
                    </div>
                    <div className='rightSide fixed right-4 top-20'>
                      <Slider/>
                    </div>
                  </div>
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

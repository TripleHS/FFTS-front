import React from "react"
import "tailwindcss/tailwind.css"
import Form from "./components/Form"
import AppContext from "./context/AppContext/AppContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <AppContext.Provider value={null}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          <div className="flex-1">
            <Switch>
              <Route path="/contact"></Route>
              <Route path="/q&a"></Route>
              <Route path="/register"></Route>
              <Route path="/signin"></Route>
              <Route path="">
                <Form />
              </Route>
             </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </AppContext.Provider>
    
  );
}

export default App

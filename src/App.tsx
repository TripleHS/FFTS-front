import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/Form";
import AppContext from "./context/AppContext/AppContext"
import CreateNavbar from './components/Navbar';
import CreateFooter from './components/Footer';
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
          <CreateNavbar/>
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
          <CreateFooter/>
        </div>
      </Router>
    </AppContext.Provider>
    
  );
}

export default App;

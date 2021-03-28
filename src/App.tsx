import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/Form";
import AppContext from "./context/AppContext/AppContext"
import CreateNavbar from './components/Navbar'
import CreateFooter from './components/Footer'

function App() {
  return (
    <AppContext.Provider value={null}>
      <CreateNavbar/>
      <Form />
      <CreateFooter/>
    </AppContext.Provider>
  );
}

export default App;

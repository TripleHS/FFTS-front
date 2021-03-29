import React from "react"
import "tailwindcss/tailwind.css"
import Form from "./components/Form"
import AppContext from "./context/AppContext/AppContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <AppContext.Provider value={null}>
      <Navbar />
      <Form />
      <Footer />
    </AppContext.Provider>
  )
}

export default App

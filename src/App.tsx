import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/Form";
import AppContext from "./context/AppContext"

function App() {
  return (
    <AppContext.Provider value={null}>
      <Form />
    </AppContext.Provider>
  );
}

export default App;

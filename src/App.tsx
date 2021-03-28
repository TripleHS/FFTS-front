import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/Form";
import AppContext from "./context/AppContext/AppContext"
import FormState from "./context/FormContext/FormState";

function App() {
  return (
    <FormState>
    <AppContext.Provider value={null}>
      <Form />
    </AppContext.Provider>
    </FormState>
  );
}

export default App;

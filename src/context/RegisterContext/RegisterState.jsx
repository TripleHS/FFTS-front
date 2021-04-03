import React, { useReducer } from "react"
import RegisterContext from "./RegisterContext"
import RegisterReducer from "./RegisterReducer"

const RegisterState = ({ children }) => {
  const initialState = {
    name: "",
    surname: "",
    city: "",
    email: "",
    password: "",
    repassword: "",
    loading: false,
  }

  const [state, dispatch] = useReducer(RegisterReducer, initialState)

  return (
    <RegisterContext.Provider
      value={{
        name: state.name,
        surname: state.surname,
        city: state.city,
        email: state.email,
        password: state.password,
        repassword: state.repassword,
        loading: state.loading,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterState

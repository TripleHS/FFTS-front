import React, {useReducer} from 'react'
import LoginContext from './LoginContext';
import LoginReducer from './LoginReducer'

const LoginState = ({children}) => {

  const initialState = {
    email: "",
    password: "",
  }

  const [state, dispatch] = useReducer( LoginReducer, initialState);

    return <LoginContext.Provider value={{
      email: state.name,
      password: state.password,
      dispatch
    }}>
      {children}
    </LoginContext.Provider>
}

export default LoginState
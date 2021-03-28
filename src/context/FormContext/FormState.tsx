import React, {useReducer} from 'react'
import { SET_FORM_DATA, SET_LOADING } from '../types';
import FormContext from './FormContext';
import FormReducer from './FormReducer'
    // @ts-ignore: Unreachable code error

const FormState = ({children}) => {

  const initialState = {
    name: "",
    surname: "",
    city: "",
    loading: false

  }

  const [state, dispatch] = useReducer( FormReducer, initialState);
  const setLoading = ()=> dispatch({type: SET_LOADING})

  const setFormData = (username: string)=> {
  
    dispatch({
      type: SET_FORM_DATA,
      payload: username
    })
  }

  


    return <FormContext.Provider value={{
      name: state.name,
      surname: state.surname,
      city: state.city,
      loading: state.loading,
      // setName,
      // setSurname,
      setFormData,
      setLoading
    }}>
      {children}
    </FormContext.Provider>
}

export default FormState
import React, { useReducer } from "react"
import SearchEngineContext from "./SearchEngineContext"
import SearchEngineReducer from "./SearchEngineReducer"

const SearchEngineState = ({ children }) => {
  const initialState = {
    speciality: "",
    city: "",
  }

  const [state, dispatch] = useReducer(SearchEngineReducer, initialState)

  return (
    <SearchEngineContext.Provider
      value={{
        speciality: state.speciality,
        city: state.city,
        dispatch,
      }}
    >
      {children}
    </SearchEngineContext.Provider>
  )
}

export default SearchEngineState

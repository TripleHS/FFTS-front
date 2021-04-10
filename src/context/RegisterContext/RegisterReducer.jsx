const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.content,
      }
    case "SET_SURNAME":
      return {
        ...state,
        surname: action.content,
      }
    case "SET_CITY":
      return {
        ...state,
        city: action.content,
      }
    case "SET_EMAIL":
      return {
        ...state,
        email: action.content,
      }
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.content,
      }
    case "SET_REPASSWORD":
      return {
        ...state,
        repassword: action.content,
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: !state.loading,
      }
    default:
      return state
  }
}

export default RegisterReducer

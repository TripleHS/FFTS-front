const LoginReducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}

export default LoginReducer

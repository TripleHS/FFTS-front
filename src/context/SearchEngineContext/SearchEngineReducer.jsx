const SearchEngineReducer = (state, action) => {

    switch(action.type) {
      case 'SET_SPECIALITY':
        return {
          ...state,
          speciality: action.content
      }
      case 'SET_CITY':
        return {
          ...state,
          city: action.content
        }
      default: return state
    }
  }
  
  export default SearchEngineReducer
  
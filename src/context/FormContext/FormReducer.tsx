import {  SET_FORM_DATA, SET_FORM_SEND, SET_LOADING } from '../types'
    // @ts-ignore: Unreachable code error

const FormReducer = (state, action) => {

  switch(action.type) {
    case 'FETCH_DATA': return {
      ...state,
      data: action.payload,
      loading: false
    }
    case SET_FORM_DATA:
    return {
      ...state,
        name: action.payload
    }
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    default: return state
  }
}

export default FormReducer

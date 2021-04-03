import React, { FormEvent, useContext} from "react";
import RegisterContext from "../context/RegisterContext/RegisterContext";
import RegisterState from '../context/RegisterContext/RegisterState'

export default function Register() {

  const initialRegisterData = {
    name: "",
    surname: "",
    city: "",
    email:'',
    password:'',
    repassword:'',
    loading: false
  }

  const {name, surname, city, email, password, repassword, dispatch} = useContext(RegisterContext)

  function handleSelectChange(e) {
    setPizza(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSend(!isSend);
  }

  function handleForm(e) {
    console.log(e.target.name)
    setFormData({[e.target.name]: e.target.value})
  }

  return (
    <div className="">
      <form
        className="flex flex-col m-5 bg-gray-200 w-2/4 basis rounded-md p-2 text-center"
        onSubmit={(e) => handleFormSubmit(e)}
      >
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="name">Imię:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" value={name} name='name' onChange={(e)=>dispatch({type:'SET_NAME', content:e.target.value})}/>
          </div>
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="surname">Nazwisko:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" name='surname' value={surname} onChange={(e)=>dispatch({type:'SET_SURNAME', content:e.target.value})} />
          </div>
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="city">Miasto:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" name='city' value={city} onChange={(e)=>dispatch({type:'SET_CITY', content:e.target.value})}/>
          </div>
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="email">E-mail:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" name='email' value={email} onChange={(e)=>dispatch({type:'SET_EMAIL', content:e.target.value})}/>
          </div>
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="password">Hasło:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" name='password' value={password} onChange={(e)=>dispatch({type:'SET_PASSWORD', content:e.target.value})}/>
          </div>
          <div className="flex justify-center p-1">
            <label className="w-1/3 text-right pr-2" htmlFor="repassword">Powtórz hasło:</label>
            <input className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}' type="text" name='repassword' value={repassword} onChange={(e)=>dispatch({type:'SET_REPASSWORD', content:e.target.value})}/>
          </div>
        <button type="submit" className="m-auto">
          Wyślij
        </button>
      </form>
    </div>
  );
}

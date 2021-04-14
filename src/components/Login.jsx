import React, { FormEvent, useContext } from "react"
import LoginContext from "../context/LoginContext/LoginContext"
import LoginState from "../context/LoginContext/LoginState"
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';

export default function Login() {
  const initialLoginData = {
    email: "",
    password: "",
  }

  const { email, password, dispatch } = useContext(LoginContext)

  function handleSelectChange(e) {
    setPizza(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    setIsSend(!isSend)
  }

  function handleForm(e) {
    console.log(e.target.name)
    setFormData({ [e.target.name]: e.target.value })
  }

  return (
    <div className=''>
      <div className='flex flex-col max-w-md mx-auto mt-4'>
        <div className='mb-3 bg-primaryBg'>
          <Button variant="outlined" className='w-full shadow-md'><FacebookIcon color='primary' className='absolute left-2'/>Kontynuuj z Facebook</Button>
        </div>
        <div className='mb-3 bg-primaryBg'>
          <Button variant="outlined" className='w-full shadow-md'>Kontynuuj z Google</Button>
        </div>
        <div className='mb-3 bg-primaryBg'> 
          <Button variant="outlined" className='w-full shadow-md'><AppleIcon className='absolute left-2'/>Kontynuuj z Apple</Button>
        </div>
      </div>
      <div className='flex justify-center items-center my-auto'>
        <hr className='bg-gray-400 w-60 mr-1'/>
        <span className='w-24 text-center'>lub</span>
        <hr className='bg-gray-400 w-60 ml-1'/>
      </div>
      <form
        className="flex flex-col m-5 bg-primaryBg max-w-md rounded-lg p-2 text-center mx-auto"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="pb-2">
          <input
            className='w-3/4 shadow-md border-gray-400 border ${className}`}'
            placeholder='Adres e-mail'
            type="text"
            name="email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", content: e.target.value })
            }
          />
        </div>
        <div className="pb-2">
          <input
            className='w-3/4 shadow-md border-gray-400 border ${className}`}'
            placeholder='Hasło'
            type="password"
            name="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", content: e.target.value })
            }
          />
        </div>
          <a href='#' className='text-sm text-blue-700 pb-2'>Nie pamiętasz hasła?</a>
          <Button variant="contained" color='primary' className='w-2/5 self-center'>Zaloguj</Button>
      </form>
    </div>
  )
}

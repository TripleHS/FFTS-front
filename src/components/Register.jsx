import React, { FormEvent, useContext } from "react"
import RegisterContext from "../context/RegisterContext/RegisterContext"
import RegisterState from "../context/RegisterContext/RegisterState"
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppleIcon from '@material-ui/icons/Apple';

export default function Register() {
  const initialRegisterData = {
    name: "",
    surname: "",
    city: "",
    email: "",
    password: "",
    repassword: "",
    loading: false,
  }

  const { name, surname, city, email, password, repassword, dispatch } = useContext(
    RegisterContext
  )

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
    <div className="">
      <div className='flex flex-col max-w-md mx-auto mt-4'>
        <div className='mb-3'>
          <Button variant="outlined" className='w-full shadow-md'><FacebookIcon color='primary' className='absolute left-2'/>Kontynuuj z Facebook</Button>
        </div>
        <div className='mb-3'>
          <Button variant="outlined" className='w-full shadow-md'>Kontynuuj z Google</Button>
        </div>
        <div className='mb-3'> 
          <Button variant="outlined" className='w-full shadow-md'><AppleIcon className='absolute left-2'/>Kontynuuj z Apple</Button>
        </div>
      </div>
      <div className='flex justify-center items-center my-auto'>
        <hr className='bg-gray-400 w-60 mr-1'/>
        <span className='w-24 text-center'>lub</span>
        <hr className='bg-gray-400 w-60 ml-1'/>
      </div>
      <form
        className="flex flex-col m-5 bg-primaryBg w-2/4 rounded-md p-2 text-center max-w-md mx-auto"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex p-1">
          <label className="w-1/3 text-left pr-2" htmlFor="name">
            Imię:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            value={name}
            name="name"
            onChange={(e) => dispatch({ type: "SET_NAME", content: e.target.value })}
          />
        </div>
        <div className="flex p-1">
          <label className="w-1/3 text-left pr-2" htmlFor="surname">
            Nazwisko:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            name="surname"
            value={surname}
            onChange={(e) =>
              dispatch({ type: "SET_SURNAME", content: e.target.value })
            }
          />
        </div>
        <div className="flex p-1">
          <label className="w-1/3 text-left text-base pr-2" htmlFor="city">
            Miasto:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            name="city"
            value={city}
            onChange={(e) => dispatch({ type: "SET_CITY", content: e.target.value })}
          />
        </div>
        <div className="flex p-1">
          <label className="w-1/3 text-left pr-2" htmlFor="email">
            E-mail:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            name="email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", content: e.target.value })
            }
          />
        </div>
        <div className="flex p-1">
          <label className="w-1/3 text-left pr-2" htmlFor="password">
            Hasło:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            name="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", content: e.target.value })
            }
          />
        </div>
        <div className="flex p-1 pb-2">
          <label className="w-1/3 text-left pr-2" htmlFor="repassword">
            Powtórz hasło:
          </label>
          <input
            className='w-2/3 shadow-md border-gray-400 border ${className}`}'
            type="text"
            name="repassword"
            value={repassword}
            onChange={(e) =>
              dispatch({ type: "SET_REPASSWORD", content: e.target.value })
            }
          />
        </div>
        <Button variant="contained" color='primary' className='w-2/5 self-center'>Zarejestruj się</Button>
      </form>
    </div>
  )
}

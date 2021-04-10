import React, { FormEvent, useContext } from "react"
import LoginContext from "../context/LoginContext/LoginContext"
import LoginState from "../context/LoginContext/LoginState"

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
    <div className="">
      <form
        className="flex flex-col m-5 bg-gray-200 w-2/4 basis rounded-md p-2 text-center"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex justify-center p-1">
          <label className="w-1/3 text-right pr-2" htmlFor="email">
            E-mail:
          </label>
          <input
            className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}'
            type="text"
            name="email"
            value={email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", content: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center p-1">
          <label className="w-1/3 text-right pr-2" htmlFor="password">
            Hasło:
          </label>
          <input
            className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}'
            type="text"
            name="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "SET_PASSWORD", content: e.target.value })
            }
          />
        </div>
        <button type="submit" className="m-auto">
          Wyślij
        </button>
      </form>
    </div>
  )
}

import React, { FormEvent, useContext } from "react"
import SearchEngineContext from "../context/SearchEngineContext/SearchEngineContext"
import SearchEngineState from "../context/SearchEngineContext/SearchEngineState"
import Button from '@material-ui/core/Button';

export default function SearchEngine() {
  const initialRegisterData = {
    speciality: "",
    city: "",
  }

  const { speciality, city, dispatch } = useContext(SearchEngineContext)

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
    <div className="flex justify-center">
      <form
        className="flex flex-col m-5 bg-primaryBg w-2/4 basis rounded-md p-2 text-center"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <div className="flex justify-center p-1">
          <label className="w-1/3 text-right pr-2" htmlFor="speciality">
            Specjalizacja:
          </label>
          <input
            className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}'
            type="text"
            value={speciality}
            name="speciality"
            onChange={(e) =>
              dispatch({ type: "SET_SPECIALITY", content: e.target.value })
            }
          />
        </div>
        <div className="flex justify-center p-1">
          <label className="w-1/3 text-right pr-2" htmlFor="city">
            Miasto:
          </label>
          <input
            className='{`${type === "text" ? "w-2/5" : "w-1/5"} shadow-md border-gray-500 border ${className}`}'
            type="text"
            name="city"
            value={city}
            onChange={(e) => dispatch({ type: "SET_CITY", content: e.target.value })}
          />
        </div>
        <Button variant="contained" color='primary' className='w-1/5 self-center'>Wyszukaj</Button>
      </form>
    </div>
  )
}

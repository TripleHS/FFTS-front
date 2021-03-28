import React, { FormEvent, useContext, useState } from "react";
import CreateInput from "./Input";
import CreateLabel from "./Label";
import FormSummary from "./FormSummary";
import FormContext from "../context/FormContext/FormContext";
import { SET_ALERT } from "../context/types";

// const TextInput: React.FC = ({ label }, ...InputProps) => (
//   <div>
//     <label className="p-1 flex justify-center">{label}</label>
//     <input type="text" {...InputProps} />
//   </div>
// );

export default function Form() {
  const initialFormData = {
    name: '',
    surname: ''
  }
  const [name, setName] = useState("");
  const [formData, setFormData] = useState(initialFormData)
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [adress, setAdress] = useState("");
  const [pizza, setPizza] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isSend, setIsSend] = useState(false);


  const formState = useContext(FormContext)
  console.log(formState)
  const {loading, setLoading} = formState

  // TODO: convert this handler to match TS, fix state conditions
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPizza(e.target.value);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSend(!isSend);
  }

  function handleForm(e) {
    console.log(e.target.name)
    setFormData({[e.target.name]: e.target.value})
  }

  return (
    <div className="">
      <h1>{loading ? "LOADING!!!" : "NOT LOADING :<<<" }</h1>
      <button onClick={()=> setLoading()}>CHANGE IT!</button>
      <form
        className="flex flex-col m-5 bg-gray-200 w-2/4 basis rounded-md p-2 text-center"
        onSubmit={(e) => handleFormSubmit(e)}
      >
          <label>Imię
            <input type="text" value={formData.name} name="name" onChange={handleForm}/>
          </label>
          <div className="">
          <label htmlFor="surname">nazwiusko</label>
          <input type="text" name='surname' className={`${formData.name ? 1 : 0}`}/></div>
        <CreateLabel description="Nazwisko:">
          <CreateInput type="text" value={surname} changeState={setSurname} />
        </CreateLabel>
        <CreateLabel description="Miejscowość:">
          <CreateInput type="text" value={city} changeState={setCity} />
        </CreateLabel>
        <CreateLabel description="Kod pocztowy:">
          <CreateInput type="text" value={code} changeState={setCode} />
        </CreateLabel>
        <CreateLabel description="Adres:">
          <CreateInput type="text" value={adress} changeState={setAdress} />
        </CreateLabel>
        <CreateLabel description="Wybierz pizzę:">
          <select
            required
            value={pizza}
            onChange={handleSelectChange}
            className="w-1/5 basis"
          >
            <option>Wiejska</option>
            <option>Hawajska</option>
            <option>Wegetariańska</option>
          </select>
        </CreateLabel>
        <CreateLabel description="Wybierz datę:">
          <CreateInput
            type="date"
            value={date}
            changeState={setDate}
            className="w-1/5"
          />
        </CreateLabel>
        <CreateLabel description="Wybierz godzinę:">
          <CreateInput type="time" value={time} changeState={setTime} />
        </CreateLabel>
        <button type="submit" className="m-auto">
          Wyślij
        </button>
      </form>
      {isSend && (
        <FormSummary
          summaryData={{name, surname, city, code, adress, pizza, date, time}}
        />
      )}
    </div>
  );
}

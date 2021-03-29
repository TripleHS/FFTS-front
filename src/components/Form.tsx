import React, { FormEvent, useState } from "react"
import CreateInput from "./Input"
import CreateLabel from "./Label"
import FormSummary from "./FormSummary"

// const TextInput: React.FC = ({ label }, InputProps) => (
//   <div>
//     <label className="p-1 flex justify-center">{label}</label>
//     <input type="text" {...InputProps} />
//   </div>
// );

export default function Form() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [city, setCity] = useState("")
  const [code, setCode] = useState("")
  const [adress, setAdress] = useState("")
  const [pizza, setPizza] = useState("")
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [isSend, setIsSend] = useState(false)

  // TODO: convert this handler to match TS, fix state conditions
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPizza(e.target.value)
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault()
    setIsSend(!isSend)
  }

  return (
    <>
      <form
        className="flex flex-col m-5 bg-gray-200 w-2/4 basis rounded-md p-2 text-center mx-auto"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <CreateLabel description="Imię:">
          <CreateInput type="text" value={name} changeState={setName} />
        </CreateLabel>
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
          summaryData={{ name, surname, city, code, adress, pizza, date, time }}
        />
      )}
    </>
  );
}

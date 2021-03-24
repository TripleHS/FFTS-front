import React, { useState } from "react";
import CreateInput from "./components/Input";
import handleInputChange from "./utils/handleInputChange";
import CreateLabel from "./components/Label";
import Context from "./context/ContextApp";
import "tailwindcss/tailwind.css"

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [adress, setAdress] = useState("");
  const [pizza, setPizza] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [isSend, setIsSend] = useState(false);

  function handleFormSubmit(e: Event) {
    e.preventDefault();
    setIsSend(!isSend);
  }

  return (
    <>
      <Context.Provider
        value={{
          name,
          setName,
          surname,
          setSurname,
          city,
          setCity,
          code,
          setCode,
          adress,
          setAdress,
          pizza,
          setPizza,
          time,
          setTime,
          date,
          setDate,
          isSend,
          setIsSend,
        }}
      >
        <form
          className="flex flex-col m-5 bg-gray-200 w-2/4 basis rounded-md p-2 text-center"
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
              onChange={(e) => handleInputChange(e, setPizza)}
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
          <CreateInput type="submit" value="Wyślij" className="m-auto" />
        </form>
      </Context.Provider>

      {isSend && (
        <div>
          <p>Podsumowanie:</p>
          <p>
            Zamawiający: {name} {surname}
          </p>
          <p>
            Adres: {city} {code} {adress}
          </p>
          <p>Wybrana pizza: {pizza}</p>
          <p>
            Data i godzina: {date} {time}
          </p>
        </div>
      )}
    </>
  );
}

export default App;

import React from "react";

const FormSummary: React.FC<{
  name: string;
  surname: string;
  city: string;
  code: string;
  adress: string;
  pizza: string;
  date: string;
  time: string;
}> = ({ name, surname, city, code, adress, pizza, date, time }) => {
  return (
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
  );
};

export default FormSummary;

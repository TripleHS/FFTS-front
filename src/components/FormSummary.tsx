import React from "react"

const FormSummary: React.FC<{
  summaryData: {
    name: string
    surname: string
    city: string
    code: string
    adress: string
    pizza: string
    date: string
    time: string
  }
}> = ({ summaryData }) => {
  return (
    <div>
      <h3>Podsumowanie:</h3>
      <p>
        Zamawiający: {summaryData.name} {summaryData.surname}
      </p>
      <p>
        Adres: {summaryData.city} {summaryData.code} {summaryData.adress}
      </p>
      <p>Wybrana pizza: {summaryData.pizza}</p>
      <p>
        Data i godzina: {summaryData.date} {summaryData.time}
      </p>
    </div>
  )
}

export default FormSummary

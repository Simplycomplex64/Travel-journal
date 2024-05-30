import React from "react"
import Header from "../components/Header"
import Cards from "../components/Cards"
import data from "../components/data"

export default function App() {

  const cards = data.map((item)=>{
    return(
      <Cards 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="main-container">
      <div className="header-wrapper">
      <Header />
      </div>
      <div className="container">
        {cards}
      </div>
    </div>
  )
}

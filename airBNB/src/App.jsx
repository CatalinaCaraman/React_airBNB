import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

export default function App() {


  return (
    <>
      <div>
        < Navbar />
        < Hero />
        < Card
          img="../public/katie.jpg"
          image="../public/star11.png"
          number1="5.0"
          number2="(6) ."
          town="USA"
          title="Life lessons with Katie Zaferes"
          cost="From $136 / person"
        />
      
        < Card
          img="../public/biking.jpg"
          image="../public/star11.png"
          number1="4.8"
          number2="(2) ."
          town="USA"
          title="Group Mountain Bikin"
          cost="From $50 / person"
        />
        < Card
          img="../public/sky.jpg"
          image="../public/star11.png"
          number1="4.5"
          number2="(10) ."
          town="USA"
          title="Skydiving with friends"
          cost="From $200 / person"
        />
          < Card
          img="../public/wed.jpg"
          image="../public/star11.png"
          number1="5.0"
          number2="(30) ."
          town="USA"
          title="Learn wedding photography"
          cost="From $125 / person"
        />

      </div>
    </>
  )
}



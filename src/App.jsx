import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Contact from './Components/Contact'
import Home from "./Components/Home"
import Products from './Components/Products'

function App() {

  const NavLinks = ["Home", "About", "Services", "Contact"]

  const contact = {
    number: "+93092309256",
    Email: "walih1101@gmail.com",
    Whatsapp: "+93412108348"
  }

  return (
    <>

      <Navbar NavBrand="Your Brand" NavLink={NavLinks} />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/Contact' element={<Contact LoContact={contact} />} />
        <Route path='/Products' element={<Products />} />

      </Routes>

    </>

  )
}

export default App
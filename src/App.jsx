import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Contact from './Components/Contact'
import Home from "./Components/Home"
import CarsPage from './Components/CarsPage'
import BMW3M3 from "./Image/BMW 3 M3.jpg"
import BMW5Series from "./Image/BMW 5 Series.jpg"
import BMWM8 from "./Image/BMW M8.jpg"
import BMWX3 from "./Image/BMW X3.jpg"
import BMWX5 from "./Image/BMW X5.jpg"
import BMWX6 from "./Image/BMW X6.jpg"
import AllProducts from './Components/AllProducts'
import Phone from './Components/Phone'



const Cars =
  [
    {
      img: BMW3M3,
      name: "BMW 3 M3",
      price: 30000,
      dec: "BMW 3 M3 consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }, {
      img: BMW5Series,
      name: "BMW 5Series",
      price: 25000,
      dec: "BMW 5Series consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }, {
      img: BMWM8,
      name: "BMW M8",
      price: 20000,
      dec: "BMW M8 consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }, {
      img: BMWX3,
      name: "BMW X3",
      price: 18000,
      dec: "BMW X3 consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }, {
      img: BMWX5,
      name: "BMW X5",
      price: 17500,
      dec: "BMW X5 consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }, {
      img: BMWX6,
      name: "BMW X6",
      price: 15000,
      dec: "BMW X6 consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae?"
    }
  ]


function App() {

  const NavLinks = [
    { Link: "Home", NavRoute: "/" },
    { Link: "Products", NavRoute: "/AllProducts" },
    { Link: "About", NavRoute: "About" },
    { Link: "Services", NavRoute: "Services" },
    { Link: "Contact", NavRoute: "/Contact" }
  ]

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
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path='/Cars' element={<CarsPage CardsCar={Cars} />} />
        <Route path="/Phone" element={<Phone />} />

      </Routes>

    </>

  )
}

export default App
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from '../src/Pages/Home/Home'
import Contact from './Pages/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
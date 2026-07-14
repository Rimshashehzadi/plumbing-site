import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from '../src/Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import FAQ from './Pages/Pages/FAQ'
import OurTeam from './Pages/Pages/OurTeam'
import ScrollProgress from './Components/Home/ScrollProgress'
import Blog from './Pages/Blog/Blog'
// import Shop from './Pages/Shop/Shop'
import ProductList from './Pages/Shop/ProductList'
import Cart from './Pages/Shop/Cart'
import WishListPage from './Pages/Shop/WishListPage'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/faq' element={<FAQ/>}/>
       <Route path='/ourteam' element={<OurTeam/>}/>
       <Route path='/blog' element={<Blog/>}/>
       {/* <Route path='/shop' element={<Shop/>}/> */}
       <Route path='/productlist' element={<ProductList/>}/>
       <Route path='/cart' element= {<Cart/>}/>
       <Route path='/wishlistpage' element={<WishListPage/>}/>
      </Routes>
<ScrollProgress/>
      <Footer/>

    </div>
  )
}

export default App
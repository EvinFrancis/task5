import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Sidebar from './pages/Sidebar.jsx'
import './App.css'
import { Link } from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Add_user from './pages/Add_user.jsx'
import View_user from './pages/View_user.jsx'
import Add_Books from './pages/Add_Books.jsx'
import Book_details from './pages/Book_details.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add_user' element={<Add_user/>}></Route>
      <Route path='/view_user' element={<View_user/>}></Route>
      <Route path='/add_books' element={<Add_Books/>}></Route>
      <Route path='/book_details' element={<Book_details/>}></Route>
    </Routes>


   </BrowserRouter>
  )
}

export default App

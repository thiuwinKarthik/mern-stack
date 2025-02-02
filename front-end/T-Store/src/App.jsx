import React from 'react'
import Home from './pages/Home'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import CreateProduct from './pages/CreateProduct'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='' >
    <BrowserRouter>
    <Routes>
    
    <Route path='/'element={<Home/>}/>
    <Route path='/create' element={<CreateProduct/>}/>
    

    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    
    </div>
  )
}




export default App

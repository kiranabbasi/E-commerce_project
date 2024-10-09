import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add.jsx'
import List from './Pages/List.jsx'
import Orders from './Pages/Orders.jsx'
import Login from './components/Login.jsx'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './Pages/Home.jsx'

export const BackendUrl = import.meta.env.VITE_BACKEND_URL;
export const Currency = '$';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token', token)
    
  }, [token])
  


  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>     
      
      {
        token === "" ? 
        <Login setToken={setToken} /> 
        : 
        <>        
        <Navbar setToken={setToken}/>
        <hr className='mt-2' />

        <div className='flex w-full '>
          <Sidebar />
          <div className='w-[70%] mx-auto m-l[max(5vw,25px)] my-8 text-gray-600 text-base'>
            <Routes>
              <Route path='/' element={<Home/>}  />
              <Route path='/Add' element={<Add token = {token} />}  />
              <Route path='/list' element={<List token = {token} />}  />
              <Route path='/Orders' element={<Orders token = {token}  />}  />
              
            </Routes>

          </div>
        </div>
      </> 
      }
      

    </div>
  )
}

export default App

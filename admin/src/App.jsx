import React, { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'

const App = () => {

  const [token,setToken]=useState('');

       const router=createBrowserRouter([
    {
      path:"/",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar></div>

    </> </div>
    },
     {
      path:"/add",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar>
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
       <Add></Add>
      </div>
      </div>

    </> </div>
    },
    {
      path:"/list",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar><div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
       <List></List>
      </div></div>

    </> </div>
      
    },
     {
      path:"/order",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar><div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Order></Order>
              </div></div>

    </> </div>
    } 

  ])
  return (
    
    <div>
      {
        token === ""? <Login></Login>:<RouterProvider router={router}/> 
      }
         

    </div>
  )
}

export default App

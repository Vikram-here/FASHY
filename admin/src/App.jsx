import React, { useEffect, useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
 import Add from './pages/add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'
export  const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {

  const [token,setToken]=useState("");

  useEffect(()=>{
localStorage.setItem('token',token);
console.log(token);
},[token])

       const router=createBrowserRouter([
    // {
    //   path:"/",
    //   element:<div className='bg-gray-70 min-h-screen w-full'><>  <div className='flex w-full flex items-center justify-center'> <Login setToken={setToken}></Login></div>

    // </> </div>
    // },
     {
      path:"/add",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar>
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
       <Add token={token}></Add>
      </div>
      </div>

    </> </div>
    },
     {
      path:"/",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar>
      <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
         
      </div>
      </div>

    </> </div>
    },
    {
      path:"/list",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar><div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
       <List token={token}></List>
      </div></div>

    </> </div>
      
    },
     {
      path:"/order",
      element:<div className='bg-gray-70 min-h-screen'><> <Navbar></Navbar> <hr /><div className='flex w-full'><Sidebar></Sidebar><div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
        <Order token={token}></Order>
              </div></div>

    </> </div>
    } 

  ])
  return (
   
    <div>

     {token === ""? <Login setToken={setToken}></Login> :<RouterProvider router={router}/>}  
       

    </div>
  )
}

export default App

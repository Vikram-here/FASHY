 
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import ShopContextProvider from './context/ShopContext'
import Footer from './components/Footer'

function App() {
     const router=createBrowserRouter([
    {
      path:"/",
      element:<><ShopContextProvider><Navbar></Navbar> <Home></Home><Footer></Footer></ShopContextProvider>

    </> 
    },
    {
      path:"/collection",
      element:<><ShopContextProvider><Navbar></Navbar><Collection ></Collection><Footer></Footer></ShopContextProvider></>
      
    },
     {
      path:"/about",
      element:<><Navbar></Navbar> <About></About></>
    },
     {
      path:"/contact",
      element:<><Navbar></Navbar><Contact></Contact> </>
    },
    {
      path:"/product/:productId",
      element:<><ShopContextProvider><Navbar></Navbar><Product></Product><Footer></Footer></ShopContextProvider></> 
    },
     {
      path:"/cart",
      element:<><ShopContextProvider><Navbar></Navbar> <Cart></Cart><Footer></Footer></ShopContextProvider></>
    },
    {
      path:"/login",
      element:<><Navbar></Navbar> <Login></Login></>
    },
    {
      path:"/place-order",
      element:<><Navbar></Navbar> <PlaceOrder></PlaceOrder></>
    },
    {
      path:"/orders",
      element:<><Navbar></Navbar><Orders></Orders></>
    }

  ])

  return (
    <>
    
   <RouterProvider router={router}/> 
    </>
  )
}

export default App

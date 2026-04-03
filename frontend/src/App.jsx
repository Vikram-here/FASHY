 
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
import Verify from './pages/Verify'

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
      element:<><ShopContextProvider><Navbar></Navbar> <About></About><Footer></Footer></ShopContextProvider></>
    },
     {
      path:"/contact",
      element:<><ShopContextProvider><Navbar></Navbar><Contact></Contact> <Footer></Footer></ShopContextProvider></>
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
      element:<><ShopContextProvider><Navbar></Navbar> <Login></Login><Footer></Footer></ShopContextProvider></>
    },
    {
      path:"/place-order",
      element:<><ShopContextProvider><Navbar></Navbar> <PlaceOrder></PlaceOrder><Footer></Footer></ShopContextProvider></>
    },
    {
      path:"/orders",
      element:<><ShopContextProvider><Navbar></Navbar><Orders></Orders><Footer></Footer></ShopContextProvider></>
    },
    {
      path:"/verify",
      element:<><ShopContextProvider><Navbar></Navbar> <Verify></Verify><Footer></Footer></ShopContextProvider></>
    }

  ])

  return (
    <>
    
   <RouterProvider router={router}/> 
    </>
  )
}

export default App

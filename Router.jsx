import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Lay from './Lay';
import Product from './Product';
import Cart1 from './Cart1';
import Orders from './Orders';
import Checkout from './Checkout';
let rout=createBrowserRouter([
    {
        path:"/",
        element:<Lay/>,
        children:[
            {
                index:true,
                element:<Product/>
            },
            {
                path:"/cart/:id",
                element:<Cart1/>
            },
            {
                path:"/cart",
                element:<Cart1/>
            },
            {
                path:"/order/:id",
                element:<Orders/>
            },
            {
                path:"/order",
                element:<Orders/>
            },
            {
                path:"/checkout/:id",
                element:<Checkout/>
            },
            {
                path:"/checkout",
                element:<Checkout/>
            }
        ]
    }
])
const Router = () => {
  return (
    <>
      <RouterProvider router={rout}></RouterProvider>
    </>
  )
}

export default Router

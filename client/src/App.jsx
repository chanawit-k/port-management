import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout } from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <h1>Index page</h1>,
      },
      // {
      //   path: 'products',
      //   element: <Products />,
      // },
      // {
      //   path: 'products/:id',
      //   element: <SingleProduct />,
      // },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
      // { path: 'about', element: <About /> },
      // {
      //   path: 'checkout',
      //   element: <Checkout />,
      // },
      // {
      //   path: 'orders',
      //   element: <Orders />,
      // },
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  //   errorElement: <Error />,
  // },
  // {
  //   path: '/register',
  //   element: <Register />,
  //   errorElement: <Error />,
  // },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App

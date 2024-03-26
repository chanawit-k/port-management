import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Dashboard, Transaction } from './pages'
import { action as historyAction } from './pages/Transaction'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'history',
        element: <Transaction />,
        action: historyAction,
      },
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

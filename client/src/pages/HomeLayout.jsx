import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="border-solid border-2 border-indigo-600 py-20">
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout

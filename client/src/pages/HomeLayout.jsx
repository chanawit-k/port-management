import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar } from '../components'
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <div className="py-20 px-8">
        <Outlet />
      </div>
    </>
  )
}

export default HomeLayout

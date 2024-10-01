import { Outlet } from 'react-router-dom'
import { SideBar } from './components/sidebar/sidebar'
import './layout.scss'

export const Layout = () => (
  <div className="layout__container">
    <SideBar />
    <div className="layout__content">
      <Outlet />
    </div>
  </div>
)

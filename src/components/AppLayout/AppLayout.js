import React from 'react'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import BillPayUI from '../../pages/services/BillPayUI'

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <BillPayUI />
      <Footer />
    </div>
  )
}

export default AppLayout

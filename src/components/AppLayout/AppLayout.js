import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
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

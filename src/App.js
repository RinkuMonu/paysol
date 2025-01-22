
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header.js";

import AboutUs from "./pages/AboutUs/AboutUs.js";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AppLayout from "./components/AppLayout/AppLayout";
import OurService from "./pages/OurService/OurService.js";
import WhyUs from "./pages/WhyUs";
import BillPayUI from '../src/pages/services/BillPayUI.js'
import OurPartner from "./pages/OurPartner";
import BBPS from "./pages/BBPS";
import Login from "./pages/Login/Login";
import Popup from "./pages/Popup/Popup.jsx";
import Term from "./pages/Term";
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import RefundPolicy from './pages/RefundPolicy.js';
import History from './pages/History/History.js';
import MyWallet from './pages/My_Wallet/MyWallet.js';
import ProfileSetting from './pages/ProfileSetting/ProfileSetting.js';


function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />,
        },
        {
          path: "/Services",
          element: <OurService />,
        },
        {
          path: "/WhyUs",
          element: <WhyUs />,
        },

        {
          path: "/BillPayUI",
          element: <BillPayUI />,
        },

        {
          path: "/OurPartner",
          element: <OurPartner />,
        },
        {
          path: "/BBPS",
          element: <BBPS />,
        },
        {
          path: "/term",
          element: <Term />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/RefundPolicy",
          element: <RefundPolicy />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/mywallet",
          element: <MyWallet />,
        },
        {
          path: "/profilesetting",
          element: <ProfileSetting />,
        },
       
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;

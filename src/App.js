
// import Header from "./components/Header/Header.js";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OurService from "./pages/OurService/OurService.js";
import WhyUs from "./pages/WhyUs";
import BillPayUI from '../src/pages/services/BillPayUI.js'
import OurPartner from "./pages/OurPartner";
import BBPS from "./pages/BBPS";
import MobileRechargeUI from "./pages/services/Mobile_Recharge/MobileRechargeUI.js";
import DTHRecharge from "./pages/services/DTH_Recharge/DTHRecharge.js";
import ElectricityBillPayment from "./pages/services/ElectricityBillPayment/ElectricityBillPayment.js";
import CreditCardPayment from "./pages/services/CreditCardPayment/CreditCardPayment.js";
import DataCardRecharge from "./pages/services/DataCard/DataCardRecharge.js";
import Landline from "./pages/services/Landline/Landline.js";
import Broadband from "./pages/services/Broadband/Broadband.js";
import Insurance from "./pages/services/Insurance/Insurance.js";


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
          path: "/recharge",
          element: <BillPayUI />,
        },

        {
          path: "/OurPartner",
          element: <OurPartner />,
        },
        {
          path: "/BBPS",
          element: <BBPS />,
        }
      ],
    },
    {
      path: "/recharge",
      element: <BillPayUI />,
      children: [
        { path: "mobile", element: <MobileRechargeUI /> },
        { path: "dth", element: <DTHRecharge /> },
        { path: "electricity", element: <ElectricityBillPayment /> },
        { path: "credit-card", element: <CreditCardPayment /> },
        { path: "datacard", element: <DataCardRecharge /> },
        { path: "landline", element: <Landline /> },
        { path: "broadband", element: <Broadband /> },
        // { path: "gas", element: <GasService /> },
        { path: "insurance", element: <Insurance /> },
        
      ],
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

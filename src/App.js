
import Header from "./components/Header/Header.js";
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
import DataCardRecharge from "./pages/services/DataCard/DataCardRecharge.js";
import CreditCardPayment from "./pages/services/CreditCardPayment/CreditCardPayment.js";
import Broadband from "./pages/services/Broadband/Broadband.js";
import Insurance from "./pages/services/Insurance/Insurance.js";
import Landline from "./pages/services/Landline/Landline.js";
import PipedGas from "./pages/services/PipedGas/PipedGas.js";

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
          path: "/MobileRecharge",
          element: <MobileRechargeUI />,
        },
        {
          path: "/DTH",
          element: <DTHRecharge />,
        },
        {
          path: "/electricitybillpayment",
          element: <ElectricityBillPayment />,
        },
        {
          path: "/datacardrecharge",
          element: <DataCardRecharge />,
        },
        {
          path: "/creditcardpayment",
          element: <CreditCardPayment />,
        },
        {
          path: "/broadband",
          element: <Broadband />,
        },
        {
          path: "/insurance",
          element: <Insurance />,
        },
        {
          path: "/landline",
          element: <Landline />,
        },
        {
          path: "/pipedgas",
          element: <PipedGas />,
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

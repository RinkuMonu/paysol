import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AppLayout from "./components/AppLayout/AppLayout";
import OurService from "./pages/OurService/OurService.js";
import WhyUs from "./pages/WhyUs";
import BillPayUI from '../src/pages/services/BillPayUI.js'
import OurPartner from "./pages/OurPartner";
import BBPS from "./pages/BBPS";
import Term from "./pages/Term";
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import RefundPolicy from './pages/RefundPolicy.js';
import History from './pages/History/History.js';
import MyWallet from './pages/My_Wallet/MyWallet.js';
import ProfileSetting from './pages/ProfileSetting/ProfileSetting.js';
import PaymentCheck from './pages/My_Wallet/PaymentCheck.js';
import PaymentMode from './pages/services/PaymentMode/PaymentMode.js';
import TransferToBank from './pages/services/TransferToBank/TransferToBank.js';
import RedeemPayback from './pages/services/Redeem/RedeemPayback.js';
import WalletTransfer from './pages/services/WalletTransfer/WalletTransfer.js';
import Page404 from './pages/Page404.js';
import KYC from './pages/Kyc/KYC.js';
import AadharCard from './pages/Kyc/AadharCard.js';
import PaymentSuccessPage from './pages/PaymentSuccessPage/PaymentSuccessPage.js';
import PaymentErrorPage from './pages/PaymentErrorPage/PaymentErrorPage.js';
import PaymentRecipt from './pages/services/PaymentReciptPage/PaymentRecipt.js';
import Services from './pages/services/Services.js';
import MobileRechargeUI from './pages/services/Mobile_Recharge/MobileRechargeUI.js';
import ElectricityBillPayment from './pages/services/ElectricityBillPayment/ElectricityBillPayment.js';
import CreditCardPayment from './pages/services/CreditCardPayment/CreditCardPayment.js';
import DataCardRecharge from './pages/services/DataCard/DataCardRecharge.js';
import Landline from './pages/services/Landline/Landline.js';
import Broadband from './pages/services/Broadband/Broadband.js';
import PipedGas from './pages/services/PipedGas/PipedGas.js';
import Insurance from './pages/services/Insurance/Insurance.js';
import Water from './pages/services/Water/Water.js';
import GooglePlay from './pages/services/GooglePlay/GooglePlay.js';
import Cable from './pages/services/Cable/Cable.js';
import Municipality from './pages/services/Municipality/Municipality.js';
import Emi from './pages/services/EMI/Emi.js';
import TrafficChallan from './pages/services/TrafficChallan/TrafficChallan.js';
import HousingBillPayment from './pages/services/HousingBillPayment/HousingBillPayment.js';
import LpgBooking from './pages/services/LpgBooking/LpgBooking.js';
import DTHRecharge from './pages/services/DTH_Recharge/DTHRecharge.js';




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
          children: [{
            
              index: true,
              element: <Navigate to="mobile" replace />,
            },
            {
              path: "mobile",
              element: <MobileRechargeUI />,
            },
            {
              path: "dth",
              element: <DTHRecharge />,
            },
            {
              path: "electricity",
              element: <ElectricityBillPayment />,
            },
            {
              path: "credit-card",
              element: <CreditCardPayment />,
            },
            {
              path: "datacard",
              element: <DataCardRecharge />,
            },
            {
              path: "landline",
              element: <Landline />,
            },
            {
              path: "broadband",
              element: <Broadband />,
            },
            {
              path: "piped-gas",
              element: <PipedGas />,
            },
            {
              path: "insurance",
              element: <Insurance />,
            },
            {
              path: "water",
              element: <Water />,
            },
            {
              path: "google-play",
              element: <GooglePlay />,
            },
            {
              path: "cable",
              element: <Cable />,
            },
            {
              path: "municipality",
              element: <Municipality />,
            },
            {
              path: "emi",
              element: <Emi />,
            },
            {
              path: "challan",
              element: <TrafficChallan />,
            },
            {
              path: "housing",
              element: <HousingBillPayment />,
            },
            {
              path: "lpg-booking",
              element: <LpgBooking />,
            },
          ]
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
          path: "/paymentmode",
          element: <PaymentMode />, 
        },
        {
          path: "/transfer-to-bank",
          element: <TransferToBank />,
        },
        {
          path: "/profilesetting",
          element: <ProfileSetting />,
        },
        {
          path: "/paymentcheck/:amount",
          element: <PaymentCheck />,
        },
        {
          path: "/redeem-payback-points",
          element: <RedeemPayback />,
        },
        {
          path: "/wallet-transfer",
          element: <WalletTransfer />,
        },
        {
          path: "/mywallet",
          element: <MyWallet />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/404",
          element: <Page404 />,
        },
        {
          path: "/kyc",
          element: <KYC />,
        },
        {
          path: "/aadhar",
          element: <AadharCard />,
        },
         {
          path: "/success",
          element:<PaymentSuccessPage/>
         },
         {
          path: "/failure",
          element: <PaymentErrorPage/>
         },
         {
          path:"/receipt",
          element:<PaymentRecipt/>
         },
        {
          path:"/:Mobile",
          element:<Services/>
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

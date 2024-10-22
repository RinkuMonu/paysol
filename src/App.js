import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/Home",
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

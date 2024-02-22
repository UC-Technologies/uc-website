import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "sonner";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import About from "./Pages/About/About";
import Services from "./Components/Home/Services/Services";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
      <Toaster />
    </main>
  );
};

export default App;

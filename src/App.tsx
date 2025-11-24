import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Partials/NavBar";
import Footer from "./components/Partials/Footer";
import PageNotFound from "./utils/PageNotFound";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Properties from "./pages/landing/Properties";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Partials/NavBar";
import Footer from "./components/Partials/Footer";
import PageNotFound from "./utils/PageNotFound";
import Home from "./pages/landing/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/Login" element={<Login />} />
        <Route path="/auth/Register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App

import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LodgingPage from "../pages/LodgingPage";
import ErrorPage from "../pages/ErrorPage";

function Roots() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/logement/:id" element={<LodgingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Roots;

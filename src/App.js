import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";
import Favoritos from "./components/favoritos/Favoritos";
import Page404 from "./components/pages/Page404";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import himnosData from './data/himnosData.json';
import { Fragment } from "react";
import HimnoSearch from "./components/pages/HimnoSearch";
import HimnoDetail from "./components/pages/HimnoDetail";
import PrivacyPolicyPage from "./components/privacidad/PrivacyPolicyPage";
import ScrollToTopOnMount from "./funciones/ScrollToTopOnMount";

function App() {
  return (
    <Fragment>
      <ScrollToTopOnMount />
      <header>
        <Navbar />
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/titles"
            element={
              <Titles himnosData={himnosData} />
            }
          ></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/buscar" element={<HimnoSearch />}></Route>
          <Route path="/himno/:numero/:titulo" element={<HimnoDetail himnosData={himnosData} />} />{/* Ruta dinámica para el detalle del himno */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

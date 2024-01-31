import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import Titles from "./components/titles/Titles";
import Favoritos from "./components/noticias/Favoritos";
import Page404 from "./components/pages/Page404";
import DetailPage from "./components/pages/DetailPage";
import Footer from "./components/footer/Footer";
import {Routes, Route} from "react-router-dom";

import {Fragment} from "react";
import himnos from "./data/himnosData";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route
            path="/titles"
            element={
              <Titles
                titulo={himnos.titulo}
                numero={himnos.numero}
                parrafos={himnos.parrafos}
              />
            }
          ></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route
            path="/detail/:numero/:titulo/:parrafos"
            element={<DetailPage />}
          ></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;

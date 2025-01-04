import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import getRandomImage from "../utils/getRandomImage";



const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState('');


  useEffect(() => {
    async function fetchRandomImage() {
      const randomImage = await getRandomImage();
      setBackgroundImage(randomImage);
    }

    fetchRandomImage();
  }, []); // Se ejecuta solo una vez al cargar el componente

  return (
    <Fragment>
      <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="content">
          <img className="logo-home" src={logo} alt="logo-principal" />
          <h1 className="main-title">Himnario Moravo Miskito</h1>
          <p>¡Alabad a Jehova Naciones todas!</p>
          <div className="buttons">
            <Link to="/titles" className="btn" >Buscar Himnos</Link>
            <Link to="/buscar" className="btn2" >Buscar por numero</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"



const Home = () => {
  return (
    <Fragment>
      <div className="container">
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

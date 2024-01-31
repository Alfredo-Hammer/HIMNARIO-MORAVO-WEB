import React, {useState} from "react";
import {FaBars, FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setShowMenu(!showMenu);
  };

  //Funcion para cerrar el menu
  const closeMenu = () => {
    setIsOpen(!isOpen);
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <img
          src="https://clipground.com/images/christian-logo-png-12.png
        "
          alt="logo-himnario"
        />
      </Link>
      <i className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span>
          {showMenu ? (
            <FaPlus className="navbar-plus" />
          ) : (
            <FaBars className="navbar-toggler-icon" />
          )}
        </span>
      </i>
      <div className={isOpen ? "navbar-collapse show" : "navbar-collapse"}>
        <ul className="navbar-nav">
          <Link className="nav-link" to="/home" onClick={closeMenu}>
            <li className="nav-item"></li>
            Inicio
          </Link>
          <hr className="line" />
          <Link className="nav-link" to="/titles" onClick={closeMenu}>
            <li className="nav-item">Himnos</li>
          </Link>
          <hr className="line" />
          <Link className="nav-link" to="/favoritos" onClick={closeMenu}>
            <li className="nav-item">Favoritos</li>
          </Link>
          <hr className="line" />
          <Link
            className="nav-link"
            to="https://alfredo-hammer.github.io/personal-porfolio/"
            onClick={closeMenu}
          >
            <li className="nav-item">Contacto</li>
          </Link>
          <hr className="line" />

          <Link
            className="nav-link"
            to="https://play.google.com/store/apps/details?id=canal.himnariomoravo&gl=US&pli=1"
            onClick={closeMenu}
          >
            <li className="nav-item">App Android</li>
          </Link>
          <hr className="line" />
        </ul>
        <div>
          {/* Descripcion del desarrolador con su imagen del perfil */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Powered by:</h5>

              {/* cuando el usuario haga click en la foto navegar ampliar la imagen */}
              {
                <Link to="/contact" className="link-item" onClick={closeMenu}>
                  <p className="card-text">Apps Hammer</p>
                </Link>
              }
              <p className="phone">+1 941 296 4916</p>
              <p className="card-text">
                <small className="text-muted">
                  <a href=" https://www.linkedin.com/in/alfredo-hammer-06608719a/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

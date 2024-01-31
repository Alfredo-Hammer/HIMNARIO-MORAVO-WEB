import React from "react";
import {Link} from "react-router-dom";
import "./TextoDiario.css";

const TextoDiario = () => {
  return (
    <div className="text-container">
      <h2 className="text-title">Alaba a tu Creador</h2>
      <p className="text-text">
        {/* Codigo para generar palabras motivacionales al hazar, */}
        <span className="text-span">
          “Alabad a Jehová desde la tierra, vosotros los que descendéis al mar,
          y todo lo que está en él; los confines de la tierra temblarán a su
          presencia.”
        </span>
        <span className="text-span">Salmos 96:11</span>
      </p>
      <Link
        to="https://www.biblia.es/reina-valera-1960.php"
        className="btn-text"
      >
        Leer
      </Link>
    </div>
  );
};

export default TextoDiario;

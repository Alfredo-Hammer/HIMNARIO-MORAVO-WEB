import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import './HimnoDetail.css';


const HimnoDetail = ({ himnosData }) => {
  const { numero, titulo, parrafos } = useParams();
  const [favorito, setFavorito] = useState(false);

  const himno = himnosData.find(himno => himno.numero === parseInt(numero));



  useEffect(() => {
    const favorito = JSON.parse(localStorage.getItem("favorito")) || [];
    const favoritoFilter = favorito.filter((item) => item.numero === numero);
    if (favoritoFilter.length > 0) {
      setFavorito(true);
    } else {
      setFavorito(false);
    }
  }, [numero, titulo, parrafos]);

  //Mensaje de favorito agregado
  const mostrarMensajeFavorito = () => {
    Swal.fire({
      title: "Agregado a favoritos",
      text: "El Himno número #" + numero + " fue agregado a favoritos.",
      icon: "success",
      button: "Aceptar",
    });
    setFavorito(true);
  };

  //Mensaje de favorito eliminado 
  const mostrarMensajeEliminarFavorito = () => {
    Swal.fire({
      title: "Eliminado de favoritos",
      text: "El Himno número #" + numero + " fue eliminado de favoritos.",
      icon: "error",
      button: "Aceptar",
    });
    setFavorito(false);
  };

  //Funcion para agregar a favoritos
  const agregarFavorito = () => () => {
    const favorito = JSON.parse(localStorage.getItem("favorito")) || [];
    const favoritoItem = {
      titulo,
      numero,
      parrafos,
    };
    const favoritoFilter = favorito.filter((item) => item.numero === numero);
    if (favoritoFilter.length === 0) {
      favorito.push(favoritoItem);
      localStorage.setItem("favorito", JSON.stringify(favorito));
      mostrarMensajeFavorito();
    }
  };

  //Funcion para eliminar de favoritos
  const eliminarFavorito = () => () => {
    const favorito = JSON.parse(localStorage.getItem("favorito")) || [];
    const favoritoFilter = favorito.filter((item) => item.numero !== numero);
    localStorage.setItem("favorito", JSON.stringify(favoritoFilter));
    mostrarMensajeEliminarFavorito();
  };

  if (!himno) {
    return <p className="error-message">No se encontró el himno.</p>;
  }

  return (
    <div className="himno-detail-container">
      <div className="icons-detail">
        <i onClick={favorito ? eliminarFavorito() : agregarFavorito()}>
          {favorito ? (
            <FaHeart className="favorito" />
          ) : (
            <FaRegHeart className="eliminado_favorito" />
          )}
        </i>
      </div>
      <h1 className='title_detail'>{himno.titulo}</h1>
      <p className='number_detail'><strong></strong>Himno# {himno.numero}</p>
      <div className="parrafos-container">
        {himno.parrafos.map((item, index) => (
          <div key={index} className="card-detail">
            <div className="card-body-detail">
              <p className="card-text-detail">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HimnoDetail;


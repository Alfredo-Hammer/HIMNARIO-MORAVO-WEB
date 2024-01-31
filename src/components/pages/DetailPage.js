import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import "./DetailPage.css";

const DetailPage = () => {
  const { numero, titulo, parrafos } = useParams();
  const [favorito, setFavorito] = useState(false);

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

  //Mensaje de favorito eliminado de la  libreria sweetalert2
  const mostrarMensajeEliminarFavorito = () => {
    Swal.fire({
      title: "Eliminado de favoritos",
      text: "El Himno número #" + numero + " fue eliminado de favoritos.",
      icon: "success",
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

  return (
    <div className="detail_container">
      <div className="icons-detail">
        <i onClick={favorito ? eliminarFavorito() : agregarFavorito()}>
          {favorito ? (
            <FaHeart className="favorito" />
          ) : (
            <FaRegHeart className="eliminado_favorito" />
          )}
        </i>
      </div>
      <h2 className="tittle_detail">{<span>{titulo}</span>}</h2>
      <p className="number_detail">Himno: #{numero}</p>
      {/* <img className='img_detail' src={`https://picsum.photos/1080/300?random=${numero}`} alt={titulo} /> */}
      <div className="text-container-detail">
        {parrafos.split(";").map((item, index) => (
          <div className="card-detail">
            <div className="card-body-detail">
              <p key={index} className="card-text-detail">
                {item}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default DetailPage;

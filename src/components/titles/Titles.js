import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Titles.css';

const Titles = ({ himnosData }) => {
  const [himnos, setHimnos] = useState([]);

  //Código para traer los datos del archivo del objeto local y mostrarlos en la pagina
  const [titulo, setTitulo] = useState('');
  const [numero, setNumero] = useState('');
  const [parrafos, setParrafos] = useState([]);
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const favorito = JSON.parse(localStorage.getItem('favorito')) || [];
    const favoritoFilter = favorito.filter(item => item.numero === numero);
    if (favoritoFilter.length > 0) {
      setFavorito(true);
    } else {
      setFavorito(false);
    }
  }, [numero, titulo, parrafos]);



  return (
    <div className="contenedor-titulos" >
      {himnosData.map((himnos, index) => (
        <Link to={`/himno/${himnos.numero}/${himnos.titulo}`} key={index} className="titulo">
          <div className="numero">{himnos.numero}</div>
          <div className="texto">{himnos.titulo}</div>
        </Link>
      ))
      }
    </div>
  )
}

export default Titles

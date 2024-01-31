import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Favoritos.css';

const Favoritos = () => {
  const [favorito, setFavorito] = useState([]);
  const [title, setTitle] = useState([
    {
      titulo1: 'La lista de favoritos está vacio',
      titulo2: 'Lista de favoritos'
    }
  ]);

  //Funcion para mostar titulo de favoritos dependiendo si esta vacio o no
  const mostrarTitulo = () => {
    if (favorito.length === 0) {
      return title[0].titulo1;
    } else {
      return title[0].titulo2;
    }
  }

  useEffect(() => {
    const favorito = JSON.parse(localStorage.getItem('favorito')) || [];
    setFavorito(favorito);
  }, []);

  return (
    <div className='favorite_list'>
      {
        <h2 className='favorite_title'>{mostrarTitulo()}</h2>
      }
      {
        favorito.map((item, index) => (
         
          <Link to={
            {
              pathname: `/detail/${item.numero}/${item.titulo}/${item.parrafos}`,
              state: {
                numero: item.numero,
                titulo: item.titulo,
                parrafos: item.parrafos
              }
            }
            
          } className='favorite_item' key={index} >
            <h3 className='numero-title'>{item.numero}</h3>
            <h3 className='texto-title'>{item.titulo}</h3>
          </Link>
        ))



      }
    </div>
  )
}

export default Favoritos
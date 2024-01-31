import React, { useState } from 'react';
import './HimnoSearch.css'; // Importa tus estilos CSS aquí
import himnosData from '../../data/himnosData.json'
import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import Swal from "sweetalert2";


const HimnoSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializamos useNavigate

  const handleButtonClick = (number) => {
    setInputValue(prevValue => prevValue + number);
  };

  const handleSearch = () => {
    const numero = parseInt(inputValue);
    if (isNaN(numero) || numero <= 0) {
      showMessage();

    } else {
      const result = himnosData.find(himno => himno.numero === numero);
      if (result) {
        // Utilizamos navigate para redirigir al usuario a la página del himno
        navigate(`/himno/${result.numero}/${result.titulo}`);
      } else {
        showMessage2();
        handleClear();
      }
    }
  };

  const handleClear = () => {
    setInputValue('');
    setError('');
  };

  //Funcion para mensaje "Ecribir un numero valido"
  const showMessage = () => {
    return Swal.fire({
      icon: "warning",
      title: "Lo siento!",
      text: "Debes de escribir un número válido!",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      }
    });
  }

  //Funcion para mostrar numero no existe en la lista de himnos
  const showMessage2 = () => {
    Swal.fire({
      icon: "error",
      title: "No econtramos el numero!",
      showClass: {
        popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
      }
    });
  }
  return (
    <div className="himno-search-container">
      <img className='logo' src={logo} alt='logo-principal' />
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ingrese el número de himno (1, 2, 3, ...)"
        />
        <div className="button-container">
          {[...Array(10).keys()].map(number => (
            <button key={number} onClick={() => handleButtonClick(number)} >{number}</button>
          ))}
          {/* Utilizamos una función en línea para llamar a handleSearch */}
          <button onClick={() => handleSearch()}>Buscar</button>
          <button onClick={handleClear}>Limpiar</button>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default HimnoSearch;













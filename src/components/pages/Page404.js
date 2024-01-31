import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
  return (
    <div className="not-found-page">
      <h1 className='title_404'>404</h1>
      <p className='text_404'>Lo siento, la página que estás buscando no existe.</p>

      <button className='btn_404'>
        <Link className='inicio' to ="/">Volver al inicio</Link>
      </button>
    </div>
  )
}

export default Page404
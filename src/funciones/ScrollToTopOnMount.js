import React, { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0); // Esto hace que la página se desplace automáticamente hacia arriba al montar el componente
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez, cuando el componente se monta

  return null; // No renderizamos nada ya que este componente solo se utiliza para el efecto de desplazamiento
}

export default ScrollToTopOnMount;
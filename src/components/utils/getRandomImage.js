// Función para obtener una imagen aleatoria de Pixabay
async function getRandomImage() {
  const apiKey = '29325243-29bd81b56bd1800c81b3482a7'; //CLAVE_DE_API
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=sunset+sky&image_type=photo&orientation=horizontal&per_page=200`;


  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.hits.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      return data.hits[randomIndex].webformatURL;
    } else {
      throw new Error('No se encontraron imágenes.');
    }
  } catch (error) {
    console.error('Error al obtener la imagen:', error);
    return null;
  }
}

export default getRandomImage;
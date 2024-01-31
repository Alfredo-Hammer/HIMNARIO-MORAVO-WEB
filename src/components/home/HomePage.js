import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [ // Lista de imágenes para el slider
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53ei4?ver=b8a9?text=Slide+1',
                'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53tTA?ver=4c23?text=Slide+2',
                'https://www.xtrafondos.com/descargar.php?id=3040&resolucion=3840x2160?text=Slide+3',
            ],
            searchQuery: '', // Estado para almacenar la consulta del buscador
        };
    }

    // Función para manejar cambios en el campo de búsqueda
    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    }

    // Función para manejar la búsqueda
    handleSearch = () => {
        // Puedes implementar aquí la lógica para realizar la búsqueda
        const { searchQuery } = this.state;
        alert(`Realizar búsqueda con el término: ${searchQuery}`);
    }

    render() {
        const { images, searchQuery } = this.state;

        return (
            <div>
                {/* Slider automático */}
                <div className="slider">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Slider ${index}`} />
                    ))}
                </div>

                {/* Buscador */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                    />
                    <button onClick={this.handleSearch}>Buscar</button>
                </div>

                {/* Botón de llamado a la acción */}
                <button className="cta-button">¡Llamado a la Acción!</button>
            </div>
        );
    }
}

export default HomePage;

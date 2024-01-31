import { Link } from 'react-router-dom';
import './Options.css';

const optionsData = [
    { id: 1, name: 'Videos', link: 'https://www.bibliatodo.com/VideosCristianos', image: 'https://i.pinimg.com/736x/ef/04/26/ef04268a92dd65e7a07a89a691e794f4.jpg?text=Videos' },
    { id: 2, name: 'Prédicas', link: 'https://www.bibliatodo.com/PredicacionesCristianas', image: 'https://cristianoreformado7.files.wordpress.com/2015/01/befunky_topic.png?w=818&h=400&crop=1?text=Predicas' },
    { id: 3, name: 'Audios', link: 'https://musica.bibliatodo.com', image: 'https://media.a24.com/p/06aaf1a8ccd2f623c8fc4ccce9fd22ad/adjuntos/296/imagenes/008/114/0008114366/1200x675/smart/cual-es-el-mejor-formato-audio.jpeg?text=Audios' },
    { id: 4, name: 'Noticias', link: 'https://www.bibliatodo.com/NoticiasCristianas',  image: 'https://c8.alamy.com/compes/2b77bb7/noticias-de-ultima-hora-noticias-de-ultima-hora-ingles-2b77bb7.jpg?text=Noticias' },
];

const Options = () => {
    return (
        <div className="options-container">
            
            {optionsData.map((option) => (
                <div key={option.id} className="option-item">
                    <Link to={option.link} className = "options-link">
                        <div
                            className="option-image"
                            style={{ backgroundImage: `url(${option.image})` }}
                        />
                        <div className="option-name">{option.name}</div>
                    </Link>
                </div>
            ))}
            
        </div>
    );
};

export default Options;

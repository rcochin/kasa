import { useState } from "react";
import { lodgingList } from "../../data/lodgingList";
import arrow from "../../assets/arrow.png"
import "./carrousel.css"

function Carrousel({ id }){

    const lodging = lodgingList.find(lodging => lodging.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if(lodging.pictures.length === 1){
        return (
            <div className="carrousel-container">
                <img src={lodging.pictures[0]}  alt="Logement" className="single-img"/>
            </div>
        )
    }else{
        const handlePreviousClick = () => {
            setCurrentImageIndex(currentImageIndex === 0 ? lodging.pictures.length - 1 : currentImageIndex - 1);
        }
        
        const handleNextClick = () => {
            setCurrentImageIndex(currentImageIndex === lodging.pictures.length - 1 ? 0 : currentImageIndex + 1);
        }
        
        return (
            <div className="carrousel-container">
                <div id="prev" onClick={handlePreviousClick}><img src={arrow} alt="flèche précédente" className="prev"/></div>
                <div id="next" onClick={handleNextClick}><img src={arrow} alt="flèche suivante" className="next"/></div>
                {lodging.pictures.map((image, index) =>(
                    <img src={image} alt="intérieur logement" className={index === currentImageIndex ? 'active' : ''} key={`image-${index}`} />
                ))}
                <p className="index-img">{`${currentImageIndex + 1}/${lodging.pictures.length}`}</p>
            </div>
        )
    }
    }
    

export default Carrousel
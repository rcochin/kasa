import { lodgingList } from "../../data/lodgingList";
import { useState } from "react";
import downArrow from '../../assets/down-arrow.png'
import './collapse.css'

function Collapse({id, type, texte}){

    const lodging = lodgingList.find(lodging => lodging.id === id);
    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        setIsOpen(!isOpen);
    }

    var title = ''
    var content = ''
    if(type === 'description'){
        title = <h3>Description</h3>
        content = <p>{lodging.description}</p>
    }else if(type === 'equipements'){
        title = <h3>Équipements</h3>
        content = lodging.equipments.map((tag, index) =>(
            <p key={index}>{tag}</p>
        ))
    }else{
        title = <h3>{type}</h3>
        content = <p>{texte}</p>
    }
    return (
        <div className="collapse-container">
          <div onClick={toggle} className="collapse-title">{title}<img src={downArrow} alt="down-arrow" className={`arrow ${isOpen && "open"}`}/></div>
          {isOpen && <div className="collapse-content">{content}</div>}
        </div>
    );

}

export default Collapse
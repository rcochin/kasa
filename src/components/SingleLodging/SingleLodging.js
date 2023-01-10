import { useParams } from "react-router-dom";
import { lodgingList } from '../../data/lodgingList'
import Carrousel from '../Carrousel/Carrousel'
import Rating from "../Rating/Rating";
import '../../styles/singleLodging.css'
import Collapse from "../Collapse/Collapse";
import ErrorPage from "../../pages/ErrorPage";

function SingleLodging(){
    const params = useParams()
    const lodgingId = params.id;
    const lodging = lodgingList.find(lodging => lodging.id === lodgingId);

    if(!lodging){
        return <ErrorPage />
    }else{
        return (
            <div>
                <Carrousel
                    id={lodging.id}
                />
                <div className="column-wrapper">
                    <div className="col-1">
                        <h2>{lodging.title}</h2>
                        <p className="location">{lodging.location}</p>
                        <div className="tags-container">
                            {lodging.tags.map((tag, index) =>(
                                <span className="tag" key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
               
                    <div className="col-2">
                        <div className="user-profile">
                            <p>{lodging.host["name"]}</p>
                            <img src={lodging.host["picture"]} alt="Hôte"/>
                        </div>
                        <Rating rate={lodging.rating}/>
                    </div>
                </div>
                <div className="single-content">
                        <Collapse
                            id={lodging.id}
                            type="description"
                        />
                        <Collapse 
                            id={lodging.id}
                            type="equipements"
                        />
                </div>
            </div>
        )
    }
    
   
}

export default SingleLodging
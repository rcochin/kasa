import { Link } from 'react-router-dom'
import { lodgingList } from '../../data/lodgingList'

function Lodgings(){
    return (
        <ul className='lodging-container'>
            {lodgingList.map((lodging) =>(
                <Link key={`${lodging.id}`} to={`/logement/${lodging.id}`} >
                    <li key={`${lodging.id}`} id={lodging.id} className="lodging-bloc" style={{backgroundImage: `url(${lodging.cover})`}}>
                        <div className='gradiant'></div>
                        <p>{lodging.title}</p>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Lodgings
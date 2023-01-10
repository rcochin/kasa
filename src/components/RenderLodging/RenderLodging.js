
import '../../styles/homePage.css'
import Lodgings from '../Lodgings/Logings'
import SingleLodging from '../SingleLodging/SingleLodging'

function RenderLodging({ type }){
    
    if( type === "list"){
        return (
            <Lodgings />
        )
    }else{
        return (
            <SingleLodging />
        )
    }
}

export default RenderLodging
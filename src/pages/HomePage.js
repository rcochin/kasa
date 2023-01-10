import Header from "../components/Header/Header"
import RenderLodging from "../components/RenderLodging/RenderLodging"
import headerHome from '../assets/header-home.png'

function HomePage(){
    return (
        <div>
            <Header img={headerHome} txt="true"/>
            <RenderLodging 
                type="list"
            />
        </div>
    )
}

export default HomePage
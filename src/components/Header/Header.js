import './header.css'

function Header({img, txt, className}){
    
    return (
        <div className={`header ${className}`} id="header">
                <img src={img} alt="En tête"></img>
                { txt === "true" && <span className="headline" id="headline">Chez vous, partout et ailleurs</span> }
                <div className='header-opacity'></div>
        </div>
    )
}


export default Header
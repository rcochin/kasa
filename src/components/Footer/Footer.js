import logoFooter from '../../assets/LOGO.svg'
import './footer.css'

function Footer(){
    return (
        <footer>
            <img src={logoFooter} alt="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
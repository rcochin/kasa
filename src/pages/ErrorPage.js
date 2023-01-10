import '../styles/errorPage.css'

function ErrorPage(){
    return (
        <div id="error-page">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <i><a href="/">Retourner sur la page d'accueil</a></i>
        </div>
    )
}

export default ErrorPage
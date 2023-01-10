import './rating.css'

function Rating({rate}){
    const rating = rate;
    let stars = [];
    for( let i = 0; i < 5; i++){
        if(i < rating){
            stars.push(<span key={i} className="star" style={{color: '#FF6060'}}>★</span>);
        }else{
            stars.push(<span key={i} className="star" style={{color: ' #E3E3E3'}}>★</span>);
        }
    }
    return(
        <div>
            {stars}
        </div>
    )
}

export default Rating
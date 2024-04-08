function Card ({character, image}){
    return(
        <div className="card">
            <h3>{character}</h3>
            <img src={image} alt={character} />
        </div>

    )
}

export default Card
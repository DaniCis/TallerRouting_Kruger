const Card = ({valor,unidad}) =>{
    return(
        <div className="card-age">
            <p className="card-numero">{valor}</p>
            <p className="card-texto">{unidad}</p>
        </div>
    )
}

export default Card;
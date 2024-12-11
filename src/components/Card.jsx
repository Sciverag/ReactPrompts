import "../styles/Card.css";;

export default function Card({person}){

    return (

            <div className="card-Card">
                <img src={require(`../img/${person.foto}.png`)}></img>
                <div>
                    <h4 className="nameCountry-Card">{person.nombre} en {person.pais}</h4>
                    <h4 className="charge-Card">{person.cargo} de {person.empresa}</h4>
                    <p className="description-Card">
                        "{person.opinion}"
                    </p>
                </div>
            </div>
        
    )
}
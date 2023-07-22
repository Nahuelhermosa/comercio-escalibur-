import Card from "./Card/Card"
import './CardWrapper.css'
import data from "./data_tarjetas.json"
export default function CardWrapper () {
    

    return (
         <div className="wrapper"> 
         <h2>Variedad de indumentaria</h2>
         <div className="grilla">
            {data.map(elemento =>(
            <Card key={elemento.id} producto={elemento}/>
            ))}
         </div>
         </div>
    )

}
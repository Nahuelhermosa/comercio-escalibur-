import Card from "./Card/Card"
import './CardWrapper.css'
export default function CardWrapper () {
    const producto = {

        imagen: 'pacman.jpg',
        titulo: 'remera',
        descripcion: 'remera 100% algodon',
        precio: 15000,
        envio: true
    }

    return (
         <div className="wrapper"> 
         <h2>Variedad de indumentaria</h2>
         <div className="grilla">
            <Card producto={producto}/>
           
         </div>
         </div>
    )

}
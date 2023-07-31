import { useState } from "react";

 

export default function Contador () {

    /*

        Información general:

            - cantidad

            - precio unitario

            - total

 

        Información fija:

            - precio unitario

 

        Predeterminados:

            - cantidad: 0

            - precio_unitario: 500

            - total: 0

    */

    const precio_unitario = 500;

 

    // Primer paso: Setear la cantidad y mostrarla en el párrafo

    // Memoria del componente

    const [cantidad, setCantidad] = useState(0);

 

    // Segundo paso: Hacer andar el +

    function sumar () {

        // Por cada click sumar 1

        // const suma = cantidad + 1;

        // setCantidad(suma);

        setCantidad(cantidad + 1);

    }

// Tercer paso: Hacer andar el -

    function restar () {

        // Evitamos que se vaya a negativos

        if (cantidad > 0) {

            setCantidad(cantidad - 1);

        }

    }

 

    return (

        <div>

            <p>Precio unitario: ${precio_unitario}</p>

            <div>

                <button onClick={restar}>Restar -</button>

                <p>{cantidad}</p>

                <button onClick={sumar}>Sumar +</button>

            </div>

            {/* Cuarto paso: Mostrar el total */}

            <p>Total: ${cantidad * precio_unitario}</p>

        </div>

    )

}
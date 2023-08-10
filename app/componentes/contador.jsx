import { useState } from "react";
export default function Contador () {
  
    const precio_unitario = 500;  
    const [cantidad, setCantidad] = useState(0);  
    function sumar () {  
        setCantidad(cantidad + 1);
    }
    function restar () {        
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div>
            <p>Rifa: ${precio_unitario}</p>
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
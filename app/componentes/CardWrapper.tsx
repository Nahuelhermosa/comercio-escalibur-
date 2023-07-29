"use client"
import { useState } from "react"
import Card from "./Card/Card"
import './CardWrapper.css'
import data from "./data_tarjetas.json"


export default function CardWrapper () { 
    const [ filtros, setfiltros] = useState("");
    return (
         <div className="wrapper"> 
         <h2>Variedad de indumentaria</h2>
         <div className="grilla">
            <div>
                <label>
                <input type="checkbox" name="remera" value="remera" onChange={()=>{
                    setfiltros("remera")
                }}/> remera < br/>
                </label>
                <label >
                <input type="checkbox" name="lombor" value="lombor" onChange={()=>{
                    setfiltros("lombor")
                }}/> lombor < br/>
                </label>
            </div>    
            {data.map(elemento =>(
            <Card key={elemento.id} producto={elemento}/>
            ))}
         </div>
         </div>
    )

}
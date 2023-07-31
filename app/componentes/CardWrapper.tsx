"use client"
import { useState } from "react"
import Card from "./Card/Card"
import './CardWrapper.css'
import data from "./data_tarjetas.json"


export default function CardWrapper () { 
    const [ filtros, setfiltros] = useState("all");
    return (
         <div className="wrapper"> 
         <h2 className="titulowrapper">Indumentaria Consolas y Accesorios</h2>
         <div className="grilla">
            <div className="filtro">
                <label>
                <input type="radio" name="categoria" value="remera" onChange={()=>{
                    setfiltros("remera")
                }}/> remera < br/>
                </label>
                <label >
                <input type="radio" name="categoria" value="lombor" onChange={()=>{
                    setfiltros("lombor")
                }}/> lombor < br/>
                </label>
                <label >
                <input type="radio" name="categoria" value="consola" onChange={()=>{
                    setfiltros("consola")
                }}/> consola < br/>
                </label>
                <label >
                <input type="radio" name="categoria" value="consola" onChange={()=>{
                    setfiltros("consola")
                }}/> consola < br/>
                </label>
                <label >
                <input type="radio" name="categoria" value="consola" onChange={()=>{
                    setfiltros("consola")
                }}/> consola < br/>
                </label>
            </div>    
            
           {data.map(elemento =>{
            if(filtros === "all"){
                return(
                    <Card key={elemento.id} producto={elemento}/>
                )}
            if(elemento.categoria === filtros) {
                return(
                    <Card key={elemento.id} producto={elemento}/>
                    )
                }
               }
            )}
         </div>
         </div>
    )

}
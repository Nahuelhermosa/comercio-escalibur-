"use client"
import './sorteo.css'
import Contador from '../componentes/Contador';
export default function Carrito () {

    return (
        <>
        <div className='sorteo'>
            <h1 className='titulosorteo'>MEGA SORTEO</h1>
            <br />
            <h2 className='titulosorteo2'>Nosotros en el calaboso del nerd "Escalibur" tratamos de que nuestros clientes se lleven la mejor experiencia con nostros, la mejor disposicion que podamos brindarle y para esto nosotros tenemos un sorteo bimestral en donde sortearemos juegos de play 5 o combos de indumentaria marca pacman old school, con este sorteo tratamos de darles el mimo que nuestros clientes merecen!! Lo unico que necesitan para entrar en el sorteo bimestral es llenar el formulario del sorteo con su respectivo Nombre, Email y el numero de factura de la compra realizada, Mucha Suerte Guerrero !!   </h2>
            <br />

            <form name="sorteo" data-netlify="true" netlify-honeypot="bot-field" hidden> 
            <input type="text" name='nombre' />
            <input type="email" name='email' />
            <textarea name="comentario" ></textarea>
            </form>

            <form method='post' className='formulario'>
                <label>
                    Nombre:
                    <input type="text" name='nombre' />
                </label>
                <label>
                    Mail:
                    <input type="email" name='email' />
                </label>
               
                <Contador />
                <input type="hidden" name="form-name" value="contacto" />
                <button type="submit">Enviar</button>
            </form> 
           
            </div>
          
        </>
    )
}
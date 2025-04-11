import './Footer.css'
export default function Footer () {
    return (
        <footer className='footer'>
            
            <img  src="iconoestrella3.png" alt="icono github" className="icono2" />
            <p>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
            <a className="contacto"
             href="mailto:nahuel_pro_517@hotmail.com?subject=Contacto%20desde%20tu%20sitio%20web&body=Hola%2C%20Nahuel!"
            target="_blank"
            rel="noopener noreferrer"
          >
          
          Contact{" "}
          <img  src="sobre.png" alt="icono github" className="icono2" />
          </a>
        </footer>
    )
}
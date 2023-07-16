import './contacto.css'

export default function Contacto () {
    return (
        <>
        <div className='producto'>
            <h1>Contactos</h1>
            <br />
            <h2>ante cualquier duda podran su consulta sera respondida a la brebedad muchas gracias</h2>

            <form action="" method="" className='formulario'>
                <label>
                    Nombre:
                    <input type="text" />
                </label>
                <label>
                    Mail:
                    <input type="email" />
                </label>
                <label>
                    Comentarios:
                    <textarea></textarea>
                </label>

                <input type="submit" value="Enviar" />
            </form>
            
            </div>
        </>
    )
}
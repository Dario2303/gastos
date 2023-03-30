import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={CerrarBtn}
            alt="cerrar modal"
            onClick={ocultarModal}
            />
        </div>

        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Nuevo Gasto</legend>
            
            <div className='campo'>
                <label htmlFor="nombre">Nombre Gasto</label>

                <input 
                    id='nombre'
                    type="text"
                    placeholder='Añade el nombre del gasto'/>
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>

                <input 
                    id='cantidad'
                    type="number"
                    placeholder='Añade la cantidad del gasto: ej. 300 '/>
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoría</label>

                <select
                    id='categoria'
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">comida</option>
                    <option value="casa">casa</option>
                    <option value="gastos">gastos</option>
                    <option value="ocio">ocio</option>
                    <option value="salud">salud</option>
                    <option value="suscripciones">suscripciones</option>
                </select>
            </div>

            <input type="submit" value="Añadir gasto"/>
        </form>
    </div>
  )
}

export default Modal

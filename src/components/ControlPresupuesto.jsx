import { useState, useEffect } from "react"


const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0
    )
    const totalDisponible = presupuesto - totalGastado
    setGastado(totalGastado);
    setDisponible(totalDisponible)
  }, [gastos])


    //dar formato de moneda
    const formatoCantidad = (cantidad)  => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Grafica aquí</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
            <span>Presupuesto: </span>{formatoCantidad(presupuesto)}
        </p>

        <p>
            <span>Disponible: </span>{formatoCantidad(disponible)}
        </p>

        <p>
            <span>Gastado: </span>{formatoCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto

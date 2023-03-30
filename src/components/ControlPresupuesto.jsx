import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"


const ControlPresupuesto = ({presupuesto, gastos}) => {


  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0
    )
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    setGastado(totalGastado);
    setDisponible(totalDisponible)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 500);
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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3B82F6',
            trailColor: '#F5F5F5',
            pathTransitionDuration: 0.5
          })}
          value={porcentaje}
        />
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

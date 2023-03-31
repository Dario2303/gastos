import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'



const Header = ({presupuesto, 
  setPresupuesto, 
                isValidPresupuesto, 
                setIsValidPresupuesto,
                gastos,
                setGastos}) => {

  return (
    <header>
        <h1>Planificador de gastos</h1>

        {/*por defecto abre nuevoPresupuesto, si el valor ingresado es valido abre cotrolPresupuesto*/}
        {isValidPresupuesto ? (
          <ControlPresupuesto
          presupuesto= {presupuesto}
          gastos = {gastos}
          setGastos = {setGastos}
          setPresupuesto = {setPresupuesto}
          setIsValidPresupuesto = {setIsValidPresupuesto}
          />
        ) : (
            <NuevoPresupuesto
            presupuesto= {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValidPresupuesto = {setIsValidPresupuesto}
          />
        )}
        
    </header>
  )
}

export default Header

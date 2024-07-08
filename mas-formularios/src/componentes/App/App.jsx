import { useState, useEffect} from 'react'
import FormularioEstudiante from '../Formulario/formulario'
import './App.css'
import Estudiante from '../Estudiantes/estudiantes';
const  App = () =>{
  const[listaEstudiantes, setListaEstudiantes]= useState([]);

const actualizarListaEstudiantes =(nuevoEstudiante)=>{
  setListaEstudiantes([...listaEstudiantes, nuevoEstudiante]);

}

useEffect(()=> {console.log(listaEstudiantes)},[listaEstudiantes])
  return (
    <>
      <FormularioEstudiante actualizarListaEstudiantes={actualizarListaEstudiantes}/>
      {
        listaEstudiantes.length > 0 ?(listaEstudiantes.map((estudiante) => {
          return(<Estudiante nombre={estudiante.nombre}
                            apellido={estudiante.apellido}
                            email={estudiante.email}
                            contraseña={estudiante.contraseña}
                            confirmar={estudiante.confirmar}/>)
        })) : ""
        
      }

    </>
  )

}

export default App

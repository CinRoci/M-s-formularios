const Estudiante =(props)=>{
    return(
        <>
        <h3>Nuevo Estudiante</h3>
        <p>Nombre: {props.nombre} {props.apellido}</p>
        <p>Email: {props.email} </p>
        </>
    );
}

export default Estudiante;
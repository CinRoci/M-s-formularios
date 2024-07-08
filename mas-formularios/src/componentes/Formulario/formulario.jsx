import { useState } from "react";


const FormularioEstudiante = (props) => {

    const [nombre, setNombre] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [errorcontraseña, setErrorContraseña] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [errorConfirmar, setErrorConfirmar] = useState("");

    const enviarFormularioEstudiante = (e) => {
        e.preventDefault();
        if (nombre.length < 2)
            setErrorNombre("El nombre debe tener al menos 2 caracteres");
        if (apellido.length < 2)
            setErrorApellido("El apellido debe tener al menos 2 caracteres");
        if (email.length < 2)
            setErrorEmail("El email debe tener al menos 2 caracteres");
        if (contraseña.length < 8)
            setErrorContraseña("La contraseña debe tener al menos 8 caracteres");
        if (errorConfirmar !== contraseña)
            setErrorConfirmar("La confirmacion debe ser igual a la cotraseña");


        const nuevoEstudiante = {
            nombre, apellido, email, contraseña, confirmar
        }
        if (errorNombre === "" && errorApellido === ""&& errorEmail=== "" && errorcontraseña === ""&& errorConfirmar==="") {
            props.actualizarListaEstudiantes(nuevoEstudiante);
            setNombre("");
            setApellido("");
            setEmail("");
            setContraseña("");
            setConfirmar("");
            setErrorNombre("");
            setErrorApellido("");
            setErrorEmail("");
            setErrorContraseña("");
            setErrorConfirmar("");
        } else {console.log("Debes completar de forma correcta todos los campos") }

    }

    return (
        <>
            <h2> Agregar nuevo estudiante </h2>
            <form onSubmit={enviarFormularioEstudiante}>
                <div>
                    <label htmlFor="nombre">
                        Nombre:
                    </label>
                    <input type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                </div>
                {errorNombre}
                <div>
                    <label htmlFor="apellido">
                        Apellido:
                    </label>
                    <input type="text"
                        id="apellido"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)} />
                </div>
                {errorApellido}
                <div>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                {errorEmail}
                <div>
                    <label htmlFor="contraseña">
                        Contraseña:
                    </label>
                    <input type="password"
                        id="contraseña"
                        name="contraseña"
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)} />
                </div>
                {errorcontraseña}
                <div>
                    <label htmlFor="confirmar">
                        Confirmar contraseña:
                    </label>
                    <input type="password"
                        id="confirmar"
                        name="confirmar"
                        value={confirmar}
                        onChange={(e) => setConfirmar(e.target.value)} />
                </div>
                {errorConfirmar}
                <button class="add"> Agregar </button>
            </form>


        </>
    );
}

export default FormularioEstudiante;
import {useState} from 'react'

const Login = () => {
    const [getUsuario,setUsuario] = useState("")  //Uno por cada input o dato a trabajar 
    const [getContraseña,setContraseña] = useState("")
    function validarInicioSesion(){
        if(getUsuario == "Jaime" && getContraseña == "1234"){
            console.log("Inicio de sesión exitoso")
        }else{
            console.log("Error de credenciales")
        }
    }
    return(
        <form action ="">
            <section> 
                <input onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" type="text" /> 
                <input onChange={(e) => setContraseña(e.target.value)}placeholder="Contraseña" type="text" />
            </section>
            <button onClick={validarInicioSesion} type="button">Iniciar Sesión</button>
        </form>
    )
}

export default Login

//forma de capturar los valores ingresados ==  <input onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" type="text" /> 
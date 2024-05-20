//import { useState } from "react"; -- ELIMINAMOS LA DOBLE BUSQUEDA DE LOS USUARIOS 
// import { usuarios } from "../../database/dataBase.jsx";
import { useEffect, useState } from "react"; //Modificacion; -- SE AGREGEGO AQUI,  AGREGAMOS LOS EFECTOS 
import { Link, useNavigate } from "react-router-dom";
Link   //Modificacion
import "./Login.css";
import Swal from "sweetalert2";
let urlUsuarios = "http://localhost:3010/users";   //Modificacion;  -- SE AGREGEGO AQUI
import axios from "axios";    //Modificacion;  -- SE AGREGEGO AQUI

const Login = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [usuarios,setUsuarios] = useState([])   //Modificacion;  -- SE AGREGEGO AQUI
  const redireccion = useNavigate();

  async function getUsuarios() {   //Modificacion; COMPLEMENTO "2"  -- SE AGREGEGO AQUI
    let resultado = await axios.get(urlUsuarios);
    console.log(resultado.data);
    setUsuarios(resultado.data);
  }

  function validarInicioSesion() {
    if (buscarUsuario()) {
      Swal.fire({
        title: "Bienvenido",
        text: "Acesso al sistema, Será redireccionado",
        icon: "success",
      });
      redireccion("/home");
    } else {
      Swal.fire({
        title: "ERROR",
        text: "Usuario y/o Contraseña incorrecta",
        icon: "error",
      });
    }
  }

  useEffect(() =>{getUsuarios();  //Modificacion; COMPLEMENTO "1"  -- SE AGREGEGO AQUI
  }, []);


  function buscarUsuario() {
    return usuarios.some(
      (usuario) =>
        usuario.user === getUsuario && usuario.contrasena === getContrasena
    );
  }
  return (
    <form>
      <div className="container fadeInAnimation">
        <h2>Iniciar Sesión</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          /> 
        </div>  
        <section className="botones">
          <button onClick={validarInicioSesion} type="button" className="btn">
            Iniciar Sesión
          </button>
            
          <Link  to="/registro" type="button" className="btn"   >   
            Crear Cuenta  
          </Link> 
        </section>
        </div>
    </form>
  );
}; //Modificacion  
export default Login;

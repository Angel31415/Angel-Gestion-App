import { useState } from "react";
import { usuarios } from "../../database/dataBase.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios"
let urlUsuarios = 'http://localhost:3000/user' //direccion de la api a consultar 

//dependencia axios: terminal:: cd front; npm i axios 

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getCorreo, setCorreo] = useState("")
  const [getContrasena, setContrasena] = useState("");
  const [usuarios,setUsuarioS]= useState([]);
  const redireccion = useNavigate();
  
  async function getUsuarios(){  //creado con aplicativo asyn
    let resultado = await axios.get(urlUsuarios);
    setUsuarioS(resultado.data)
  }
  getUsuarios();

  function buscarUsuario() {
    return usuarios.some((usuario) => usuario.user === getUsuario);
  }

  async function agregarUsuario() {
    let usuario = {
        user: getUsuario,
        contrasena: getContrasena,
        correo:getCorreo,
    };
    await axios.post(urlUsuarios,usuario);     //usuarios.push(usuario);
  }
  const registrarUsuario = () => {//Comprobante de existencia de usuarios 
    if(buscarUsuario()){
        console.log("Usuario ya existente en la base de datos ")
    }else{
        agregarUsuario();
        alert("Usuario Creado con Exito")
        console.log(usuarios);
        redireccion("/")
    }
  };

  function cancelar(){//Retorno al home 
    redireccion("/");
  }
 
  return (
    <form>
      <div className="container fadeInAnimation">
        <h2>Registro</h2>
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
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setCorreo(e.target.value);
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
          <button onClick={registrarUsuario} type="button" className="btn">
            Crear Usuario
          </button>
        </section>

        <section className="botones">
          <button onClick={cancelar} type="button" className="btn-cancelar">
            Cancelar
          </button>
        </section>

      </div>
    </form>
  );
};
export default Registro;

import { useEffect, useState } from "react";
//import { usuarios } from "../../database/dataBase.jsx";  //Modificacion  -- ELIMINAMOS LA NECECIDAD DE GENERAR UNA BUSQUEDA EN EL REGISTRO 
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Swal from "sweetalert2";
let urlUsuarios = "http://localhost:3010/users"

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  const [usuarios, setUsuarios] = useState([]); //Modificacion; ARREGLO VACIO -
  const redireccion = useNavigate();

  async function getUsuarios() {  //Modificacion; COMPLEMENTO 2
    let resultado = await axios.get(urlUsuarios);
    console.log(resultado.data);
    setUsuarios(resultado.data);
  }

  useEffect(() => {
    getUsuarios(); //Modificacion; COMPLEMENTO 1
  }, []);

  function buscarUsuario() {
    return usuarios.some((usuario) => usuario.user === getUsuario);
  }

  async function agregarUsuario() {
    //Modificacion; funcion con la cual se crea y busca la existencia del usuasArio desde la BD, No local - BUSCADO ; COMPLEMENTO 0
    let usuario = {
      user: getUsuario,
      contrasena: getContrasena,
      correo: getCorreo,
    };
    await axios.post(usuario);
  }

  const registrarUsuario = () => {
    //Modificacion; Agregamos una alerta importada ("En la terminal del front : npm i sweetalert2")
    if (buscarUsuario()) {
      Swal.fire({
        title: "ERROR",
        text: "Usuario ya existe en la Base de Datos",
        icon: "error",
      });
    } else {
      agregarUsuario();
      console.log(usuarios);
      redireccion("/");
    }
  };

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
        <section className="botones">
          <button onClick={registrarUsuario} type="button" className="btn">
            Crear Cuenta
          </button>
        </section>
      </div>
    </form>
  );
};
export default Registro;



/// Servidor -- POST, GET 
// local -- PUSH (filter, map, find, some)
//  Cantidad de componentes, funcionamientos, interfaz, estilos , manejo de dependencias(react, router, dom, JSON-SERVER)
//
//

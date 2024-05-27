import { useState, useEffect } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import axios from "axios";
import "./EditarUsuario.css";
import Swal from "sweetalert2";
let urlUsuarios = "http://localhost:3000/user/";


const EditarUsuario = () => {
  

  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  let {id} = useParams(); 

  function actualizarUsuario() {   
      Swal.fire({
      title: "Está seguro que desea Editar el Usuario? " ,
      text: "No se puede reversar esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Editar",
    }).then((result) => {
      if (result.isConfirmed) {
        confirmar(id);
        Swal.fire({
          title: "Editado!",
          text: "El usuario se Edito correctamente.",
          icon: "success",
        });
      }
    });
  }

  function confirmar() {
      let nuevoUsuario = {
          user: getUsuario,
          contrasena: getContrasena,
          correo: getCorreo
      };
      
  }

  async function usuarioId() {
      let usuarioEditar = await axios.get(urlUsuarios + id);
      setUsuario(usuarioEditar.data.user)
      setContrasena(usuarioEditar.data.contrasena)
      setCorreo(usuarioEditar.data.correo)
  }

  useEffect(() => {
       usuarioId();
    }, []);
  

  return (
      <form>
        <div className="container fadeInAnimation">
          <h2>Editar Usuario</h2>
          <div className="input-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
              value = {getUsuario}
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
              value = {getContrasena}
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
              value = {getCorreo}
            />
          </div>
          <section className="botones">
            <button onClick={actualizarUsuario} type="button" className="btn">
              Modificar Usuario
            </button>
            <button  type="button" className="btn">
              <Link to={"/home"}>
              Cancelar 
              </Link>
            </button>
          </section>
        </div>
      </form>
    );
  };
export default EditarUsuario;

import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "../../helpers/Header";
import './Home.css'
import { Link } from "react-router-dom";
let urlUsuarios = "http://localhost:3010/users"

const Home = () => {

  const [usuarios,setUsuarios] = useState([]);  
  const getUsuarios = async () => {
    let resultado = await axios.get(urlUsuarios);
      setUsuarios(resultado.data)
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  function eliminarUsuario(id, user) {
    Swal.fire({
      title: "Estas Seguro de que desea eliminar el Usuario? " + user,
      text: "Tu no podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        confirmar(id)
        Swal.fire({
          title: "Eliminado!",
          text: "El Usuario se elimino corectamente.",
          icon: "success"
        });
      }
    });
  };

  async function confirmar(id){
    await axios.delete(urlUsuarios + "/" + id );
    getUsuarios();
  };

  return (
    <div className="home">
        <Header />
        <section className="usuarios" >
          {usuarios.map((usuario)=> (
            <section className="card"key = {usuario.id}>
              <p>Usuario: {usuario.user}</p>
              <input defaultValue = {usuario.contrasena} type="text" />
              <p>ID: {usuario.id}</p>  
              <section>
              <button >
                <Link to={"/editar/" + usuario.id }>
                  Editar
                </Link>
              </button>
                <button onClick={() => eliminarUsuario(usuario.id)} >
                  Eliminar
                  </button>
              </section>
            </section>
          ))}
        </section>
    </div>
  )
  }



export default Home
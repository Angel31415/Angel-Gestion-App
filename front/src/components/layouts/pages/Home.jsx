import Header from "../../helpers/Header";
import axios from "axios";
import { useEffect, useState } from "react";
let urlUsuarios = "http://localhost:3010/user"

const Home = () => {
  const [usuarios,setUsuarios] = useState([])  
  const getUsuarios = async () => {
    let resultado = await axios.get(urlUsuarios);
      setUsuarios(resultado.data)
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  

  return (
    <div>
        <Header />
        <section>
          {usuarios.map((usuario)=> (
            <section key = {usuario.id}>
              <p>Usuario: {usuario.user}</p>
              <input value = {usuario.contrasena} type="text" />
              <p>ID: {usuario.id}</p>  
              <section>
                <button>Editar</button>
                <button>Eliminar</button>
              </section>
            </section>
          ))}
        </section>
    </div>
  )
}

export default Home
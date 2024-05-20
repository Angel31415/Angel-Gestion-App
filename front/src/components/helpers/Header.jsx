import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <img src="" alt="Logo" />
      <hr></hr>
      <nav>
        <a href="">Servicios</a>
        <hr></hr>
        <a href="">Contacto</a>
        <hr></hr>
        <a href="">Acerca de</a>
      </nav>
      <hr></hr>
      <button>
        <Link to="/">Cerrar Sesion</Link>
      </button>
    </header>
  );
};

export default Header;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/layouts/auth/Login";
import Home from "./components/layouts/pages/Home";
import Registro from "./components/layouts/auth/Registro";
import EditarUsuario from "./components/layouts/pages/EditarUsuario";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/editar/:id",
    element: <EditarUsuario/>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

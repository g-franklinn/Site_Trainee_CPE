import { RouterProvider,
  createBrowserRouter,
  Route, 
  createRoutesFromElements} from "react-router-dom";

import Home from "./Pages/home/home";
import Login from "./Pages/login/Login";
import Cadastro from "./Pages/cadastro/Cadastro";
import EditarPerfil from "./Pages/EditarPerfil/EditarPerfil";
import MeuPerfil from "./Pages/MeuPerfil/meuPerfil";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/cadastro" element={<Cadastro/>}/>
    <Route path="/meuperfil" element={<MeuPerfil/>}/>
    <Route path="/editarperfil" element={<EditarPerfil/>}/>
    </Route>
  )
) 

export default function Routes() {
  return <RouterProvider router={router}/>
}
import { RouterProvider,
  createBrowserRouter,
  Route, 
  createRoutesFromElements} from "react-router-dom";

import Home from "./Pages/home/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Cadastro" element={<Cadastro/>}/>
    <Route path="/MeuPerfil" element={<MeuPerfil/>}/>
    <Route path="/EditarPerfil" element={<EditarPerfil/>}/>
    </Route>
  )
) 

export default function Routes() {
  return <RouterProvider router={router}/>
}
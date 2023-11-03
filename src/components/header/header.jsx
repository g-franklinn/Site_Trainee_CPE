import {Header} from "./Styles";
import { Link } from "react-router-dom";

function HeaderBase () {

  return (
    <Header>
      <h1>DOTI Musical</h1>

      <div className="header-menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/cadastro"}>Cadastro</Link>
        <Link to={"/meuperfil"}>Meu Perfil</Link>
        <Link to={"/editarperfil"}>Editar Perfil</Link>
      </div>
    </Header>
  )
}

export default HeaderBase;
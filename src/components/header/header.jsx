import {Header} from "./Styles";

function Header () {

  return (
    <Header>
      <h1>DOTI Musical</h1>

      <div className="header-menu">
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Cadastro</a>
        <a href="#">Meu Perfil</a>
        <a href="#">Editar Perfil</a>
      </div>
    </Header>
  )
}

export default Header;
import "./StylesLogin";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent, StyledForm, StyledInput, StyledButton } from "./StylesLogin";
import Violino from "../../assets/Violino.svg";
import Nota1 from "../../assets/Nota 1.svg";
import Nota4 from "../../assets/Nota 4.svg";
import Arpa from "../../assets/Arpa.svg";



function Login () {

  //Função para autenticar o usuario e implementar no back depois.
  const handleLogin = () => {
    alert("Usuário autenticado!");
  };

  return (
    <>
      <div>
        <HeaderBase />
          <PageContent>

          <img src={Nota1}  className="nota1" />
          <img src={Violino}  className="violino" />

            <div className="container">
              <h1>Login</h1>
              <div className="menuInterno">

                <StyledForm>
                  <h2></h2>
                  <h2></h2>
                  <h2>Usuário</h2>
                  <StyledInput type="text" placeholder="Digite seu login" />
                  <h2>Senha</h2>
                  <StyledInput type="password" placeholder="Digite sua senha" />
                  <StyledButton className="loginBtn" onClick={handleLogin}>Entrar</StyledButton>
                </StyledForm>
              </div>
            </div>
            
          <img src={Nota4}  className="nota4" />
          <img src={Arpa}  className="arpa" />

          </PageContent>
        <FooterBase/>
      </div>
    </>
  )
}

export default Login;
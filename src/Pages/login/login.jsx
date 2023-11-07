import "./StylesLogin";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent, StyledForm, StyledInput, StyledButton } from "./StylesLogin";



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
            <div className="container">
              <h1>Login</h1>
              <div className="menuInterno">

              <StyledForm>
                <h2>Usuário</h2>
                <StyledInput type="text" placeholder="Digite seu login" />
                <h2>Senha</h2>
                <StyledInput type="password" placeholder="Digite sua senha" />
                <StyledButton onClick={handleLogin}>Autenticar</StyledButton>
              </StyledForm>
              

              </div>
            </div>
          </PageContent>


        <FooterBase/>
      </div>
    
    </>
  )
}

export default Login;
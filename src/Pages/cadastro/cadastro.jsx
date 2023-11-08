import "./StylesCadastro";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent, StyledForm, StyledInput, StyledButton } from "./StylesCadastro";



function Cadastro() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Cadastro</h1>
              <div className="menuInterno">
                <StyledForm>
                  <h2></h2>
                  <h2></h2>
                  <h2>Usuário</h2>
                  <StyledInput type="text" placeholder="Digite seu nome de usuário" />
                  <h2>Email</h2>
                  <StyledInput type="text" placeholder="Digite seu email" />
                  <h2 className="departamento">Departamento</h2>
                  <StyledInput type="text" placeholder="Digite seu departamento" />
                  <h2>Cargo</h2>
                  <StyledInput type="text" placeholder="Digite seu cargo" />
                  <h2>Senha</h2>
                  <StyledInput type="password" placeholder="Digite sua senha" />
                  <StyledButton className="loginBtn" >Entrar</StyledButton>
                </StyledForm>
              
              </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>

    </>
  )
} 

export default Cadastro;

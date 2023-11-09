import "./StylesMeuPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesMeuPerfil";
import { StyledButton } from "../login/StylesLogin";
import FotoPerfil from "../../assets/Foto-Perfil.svg";



function MeuPerfil() {

  return (
    <>
      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Meu Perfil</h1>
              <div className="menuInterno">
                  <h2>Nome:</h2>
                  <p>Nome Sobrenome</p>
                  <h2>Email:</h2>
                  <p>nome@dotimusical.com</p>
                  <h2>Departamento:</h2>
                  <p>Departamento</p>
                  <h2>Cargo:</h2>
                  <p>Nome do Cargo</p>
                  <StyledButton>Editar Perfil</StyledButton>
                </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default MeuPerfil;

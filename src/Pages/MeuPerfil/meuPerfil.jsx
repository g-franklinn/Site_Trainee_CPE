import "./StylesMeuPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import Nota1 from "../../assets/Nota 1.svg";
import Nota5 from "../../assets/Nota 5.svg";
import Teclado from "../../assets/Teclado.svg";
import Saxofone from "../../assets/Saxofone.svg";
import Microfone from "../../assets/Microfone.svg";
import { PageContent } from "./StylesMeuPerfil";
import { StyledButton } from "../login/StylesLogin";
import FotoPerfil from "../../assets/Foto-Perfil.svg";



function MeuPerfil() {

  return (
    <>
      <div>
          <HeaderBase />

          <PageContent>
                        
          <img src={Nota1}  className="nota1" />
          <img src={Nota5}  className="nota5" />
          <img src={Teclado}  className="teclado" />
          <img src={Saxofone}  className="saxofone" />
          <img src={Microfone}  className="microfone" />

            <div className="container">
              <h1>Meu Perfil</h1>
              <div className="menuInterno">
                  <h2>Nome:</h2>
                  <p>Nome Sobrenome</p>
                  <h2>Email:</h2>
                  <p className="email">nome@dotimusical.com</p>
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

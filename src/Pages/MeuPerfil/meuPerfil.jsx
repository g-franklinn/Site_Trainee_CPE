import "./StylesMeuPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesMeuPerfil";


function MeuPerfil() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Meu Perfil</h1>
              <div className="menuInterno">
              
              </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default MeuPerfil;

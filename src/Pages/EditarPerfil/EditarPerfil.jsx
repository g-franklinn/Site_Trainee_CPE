import "./StylesEditarPerfil";
import HeaderBase from "../../components/header/header";
import FooterBase from "../../components/footer/footer";
import { PageContent } from "./StylesEditarPerfil";



function EditarPerfil() {

  return (
    <>

      <div>
          <HeaderBase />

          <PageContent>
            <div className="container">
              <h1>Editar Perfil</h1>
              <div className="menuInterno">
              
              </div>
            </div>
          </PageContent>

          <FooterBase/>
      </div>
    
    </>
  )
} 

export default EditarPerfil;
